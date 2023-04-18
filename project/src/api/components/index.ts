import { Router } from "express";
import { baseRoutes } from "./base/base.router";

/**
 * init component routes
 * 
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = 'new'): void{
    router.use(`${prefix}`, new baseRoutes().routes());
}