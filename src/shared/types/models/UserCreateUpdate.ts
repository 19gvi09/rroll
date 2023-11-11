/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleEnum } from './RoleEnum';

export type UserCreateUpdate = {
    email: string;
    password: string;
    is_active?: (boolean | null);
    is_superuser?: (boolean | null);
    is_verified?: (boolean | null);
    first_name: string;
    last_name: string;
    patronymic?: (string | null);
    role_id?: RoleEnum;
    grade_id?: (string | null);
    location_id?: (string | null);
};
