import { z, ZodTypeAny } from 'zod';

type FieldType = 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'textarea' | 'dropdown' | 'date';

export interface Field {
    name: string;
    label: string;
    type: FieldType;
    required?: boolean;
    fullWidth?: boolean;
}

export const generateSchemaFromFields = (fields: Field[]) => {
    const shape: Record<string, ZodTypeAny> = {};

    fields.forEach((field) => {
        let base: ZodTypeAny;

       switch (field.type) {
        case 'email':
            base = z.string().email(`${field.label} must be a valid email`);
            break;

        case 'number':
            base = z.coerce.number().refine((val) => !isNaN(val), {
            message: `${field.label} must be a number`,
            });
            break;

        case 'checkbox':
            base = z.boolean();
            break;

        case 'textarea':
            base = z.string().optional(); 
            break;

        default:
            base = z.string();
            break;
        }


        shape[field.name] = field.required ? base : base.optional();
    });

    return z.object(shape);
};
