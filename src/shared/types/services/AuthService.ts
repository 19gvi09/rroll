/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BearerResponse } from '../models/BearerResponse';
import type { Body_auth_jwt_login_api_auth_jwt_login_post } from '../models/Body_auth_jwt_login_api_auth_jwt_login_post';
import type { GradeCreateUpdate } from '../models/GradeCreateUpdate';
import type { GradeRead } from '../models/GradeRead';
import type { LocationCreateUpdate } from '../models/LocationCreateUpdate';
import type { LocationRead } from '../models/LocationRead';
import type { UserCreateUpdate } from '../models/UserCreateUpdate';
import type { UserRead } from '../models/UserRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Auth:Jwt.Login
     * @param formData 
     * @returns BearerResponse Successful Response
     * @throws ApiError
     */
    public static authJwtLoginApiAuthJwtLoginPost(
formData: Body_auth_jwt_login_api_auth_jwt_login_post,
): CancelablePromise<BearerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/jwt/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Auth:Jwt.Logout
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authJwtLogoutApiAuthJwtLogoutPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/jwt/logout',
            errors: {
                401: `Missing token or inactive user.`,
            },
        });
    }

    /**
     * Authenticated Route
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authenticatedRouteApiAuthVerifyGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/verify',
        });
    }

    /**
     * Register
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static registerApiApiRegisterPost(
requestBody: UserCreateUpdate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/api/register/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Users:Current User
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static usersCurrentUserApiAuthMeGet(): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/me',
            errors: {
                401: `Missing token or inactive user.`,
            },
        });
    }

    /**
     * Users:Patch Current User
     * @param requestBody 
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static usersPatchCurrentUserApiAuthMePatch(
requestBody: UserCreateUpdate,
): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/auth/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Missing token or inactive user.`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Users:User
     * @param id 
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static usersUserApiAuthIdGet(
id: string,
): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Missing token or inactive user.`,
                403: `Not a superuser.`,
                404: `The user does not exist.`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Users:Patch User
     * @param id 
     * @param requestBody 
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static usersPatchUserApiAuthIdPatch(
id: string,
requestBody: UserCreateUpdate,
): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/auth/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Missing token or inactive user.`,
                403: `Not a superuser.`,
                404: `The user does not exist.`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Users:Delete User
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static usersDeleteUserApiAuthIdDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/auth/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Missing token or inactive user.`,
                403: `Not a superuser.`,
                404: `The user does not exist.`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Employees
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static getEmployeesApiEmployeesGet(): CancelablePromise<Array<UserRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employees/',
        });
    }

    /**
     * Create Grade
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createGradeApiAuthGradePost(
requestBody: GradeCreateUpdate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/grade/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Grade
     * @param requestBody 
     * @returns GradeRead Successful Response
     * @throws ApiError
     */
    public static updateGradeApiAuthGradePatch(
requestBody: GradeCreateUpdate,
): CancelablePromise<GradeRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/auth/grade/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Grade
     * @param gradeId 
     * @returns GradeRead Successful Response
     * @throws ApiError
     */
    public static getGradeApiAuthGradeGradeIdGet(
gradeId: string,
): CancelablePromise<GradeRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/grade/{grade_id}/',
            path: {
                'grade_id': gradeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Grades
     * @returns GradeRead Successful Response
     * @throws ApiError
     */
    public static getGradesApiAuthGradesGet(): CancelablePromise<Array<GradeRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/grades/',
        });
    }

    /**
     * Delete Grade
     * @param gradeId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteGradeApiGradeIdDelete(
gradeId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/{grade_id}/',
            path: {
                'grade_id': gradeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Location
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createLocationApiAuthLocationPost(
requestBody: LocationCreateUpdate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/location/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Location
     * @param requestBody 
     * @returns LocationRead Successful Response
     * @throws ApiError
     */
    public static updateLocationApiAuthLocationPatch(
requestBody: LocationCreateUpdate,
): CancelablePromise<LocationRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/auth/location/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Location
     * @param locationId 
     * @returns LocationRead Successful Response
     * @throws ApiError
     */
    public static getLocationApiAuthLocationLocationIdGet(
locationId: string,
): CancelablePromise<LocationRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/location/{location_id}/',
            path: {
                'location_id': locationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Locations
     * @returns LocationRead Successful Response
     * @throws ApiError
     */
    public static getLocationsApiAuthLocationsGet(): CancelablePromise<Array<LocationRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/locations/',
        });
    }

    /**
     * Delete Location
     * @param locationId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteLocationApiLocationIdDelete(
locationId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/{location_id}/',
            path: {
                'location_id': locationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
