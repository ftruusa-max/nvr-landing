import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.firstName || !body.lastName || !body.email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
        // Specific table for applications as requested
        const AIRTABLE_TABLE_NAME = "Postulacion";

        if (!AIRTABLE_API_TOKEN || !AIRTABLE_BASE_ID) {
            console.error('Missing Airtable configuration');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Map form fields to Airtable "Postulacion" table structure
        // Based on the form in src/app/unete-al-equipo/page.tsx
        const fields = {
            "Nombres": body.firstName,
            "Apellidos": body.lastName,
            "Correo Electrónico": body.email,
            "Teléfono": body.phone || "",
            "Puesto de Interés": body.position || "",
            "LinkedIn/CV": body.linkedin || "",
            "Presentación": body.message || "",
            "Fecha Postulación": new Date().toISOString().split('T')[0] // Optional useful field
        };

        const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: fields
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Airtable API Error:', errorData);
            return NextResponse.json(
                { error: 'Failed to submit application', details: errorData },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('Applications API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
