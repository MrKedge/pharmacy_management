import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from '@/hooks/Form/useForm';
import { Field } from '@/lib/schema';
import { Textarea } from '../ui/textarea';

interface Props {
    fields: Field[];
    onSubmit?: (data: any) => void;
}

const DynamicForm = ({ fields, onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(fields);

    const handleFormSubmit = (data: any) => {
        if (onSubmit) {
            onSubmit(data);
        } else {
            console.log('Form Data:', data);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {fields.map((field) => (
                    <div key={field.name} className={field.fullWidth ? 'col-span-2' : 'col-span-1'}>
                        <label className="mb-1 block font-medium">{field.label}</label>

                        {field.type === 'checkbox' ? (
                            <input
                                type="checkbox"
                                className="h-4 w-4 border-primary-border bg-fill-bg text-primary-input"
                                {...register(field.name)}
                            />
                        ) : field.type === 'textarea' ? (
                            <Textarea
                                rows={4}
                                className="w-full border-primary-border bg-fill-bg py-4 text-primary-input focus:border-primary-border focus:ring-0 focus:outline-none"
                                {...register(field.name)}
                            />
                        ) : (
                            <Input
                                type={field.type}
                                className="border-primary-border bg-fill-bg py-4 text-primary-input focus:border-primary-border focus:ring-0 focus:outline-none"
                                {...register(field.name)}
                            />
                        )}

                        {errors[field.name] && <p className="text-sm text-red-500">{errors[field.name]?.message?.toString()}</p>}
                    </div>
                ))}
            </div>

            <Button type="submit" className="p-6">
                Save Details
            </Button>
        </form>
    );
};

export default DynamicForm;
