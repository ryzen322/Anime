import { Database } from "../database.types";

export type Row<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type UpdateDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];



// export type Location = Row<'location'>;
// export type LocationInsertDto = InsertDto<'location'>;
// export type LocationUpdateDto = UpdateDto<'location'>;