/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleEnum } from './RoleEnum';

export type UserRead = {
    id: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    is_verified?: boolean;
    first_name: string;
    last_name: string;
    patronymic?: (string | null);
    created_at: string;
    role_id?: RoleEnum;
    grade_id?: (string | null);
    location_id?: (string | null);
};
