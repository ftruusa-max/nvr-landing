import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
        const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

        if (!AIRTABLE_API_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
            console.error('Missing Airtable configuration');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Map form fields to Airtable "Leads" table structure
        // Assuming column names: "Name", "Company", "Email", "Phone", "Requirement Type", "Fuel Interest"
        // You generally need to match the field names in Airtable EXACTLY.
        // I will use sensible defaults based on the form, but if they differ on the user's side, this might fail.
        // However, standard naming usually works.
        const fields = {
            "Nombre Completo": body.name,
            "Empresa": body.company || "",
            "Correo Corporativo": body.email,
            "Teléfono / Celular": body.phone || "",
            "Tipo de Requerimiento": body.requirementType || "",
            "Tipo de Combustible": body.fuelInterest || "",
            "Origen": "Web - Landing Page"
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
                { error: 'Failed to submit to Airtable', details: errorData },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
