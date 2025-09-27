import { z } from 'zod';

export const motorcycleSchema = z.object({
	vin: z
		.string()
		.min(17, 'VIN must be exactly 17 characters')
		.max(17, 'VIN must be exactly 17 characters')
		.regex(/^[A-HJ-NPR-Z0-9]{17}$/, 'Invalid VIN format'),
	make: z.string().min(1, 'Make is required'),
	model: z.string().min(1, 'Model is required'),
	year: z
		.number()
		.int()
		.min(1980, 'Year must be 1980 or later')
		.max(new Date().getFullYear() + 1, 'Year cannot be in the future'),
	current_mileage: z.number().int().min(0).optional(),
	description: z.string().optional()
});

export type MotorcycleSchema = typeof motorcycleSchema;