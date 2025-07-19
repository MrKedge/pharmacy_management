import { Field, generateSchemaFromFields } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, UseFormReturn, useForm as useReactHookForm } from 'react-hook-form';
import { z } from 'zod';

export const useForm = (fields: Field[], options?: UseFormProps<any>): UseFormReturn<any> & { schema: z.ZodObject<any> } => {
    const schema = generateSchemaFromFields(fields);

    const form = useReactHookForm({
        ...options,
        resolver: zodResolver(schema),
    });

    return {
        ...form,
        schema,
    };
};
