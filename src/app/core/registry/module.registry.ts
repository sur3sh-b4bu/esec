import { Injectable } from "@angular/core";
import { BaseManifest } from "../models/module.model";
import {
    AdminManifest,
    BillingManifest,
    DashboardManifest,
    LicenseManifest,
    MyReportManifest,
    CostManifest,
    CloudManifest,
    ProcessManifest,
    AssetManifest,
    ComplianceManifest,
    HpcManifest,
    MultiSiteManifest,
    SoftwareRegisterManifest,
    LicenseManagerManifest,
    SoftwareManifest,
    CustomLicenseManifest,
    PlannerPortalManifest,
    SoftwareReservationManifest,
    ChatbotManifest,
    SoftwareDashboardManifest,
    ProjectPortalManifest
} from "../../cores-manifest";

@Injectable({
    providedIn: "root"
})

export class ModuleRegistry {
    modules: BaseManifest[] = [
        new DashboardManifest(),
        new CostManifest(),
        new BillingManifest(),
        new MyReportManifest(),
        new LicenseManifest(),
        new CloudManifest(),
        new ProcessManifest(),
        new AssetManifest(),
        new ComplianceManifest(),
        new HpcManifest(),
        new MultiSiteManifest(),
        new SoftwareRegisterManifest(),
        new AdminManifest(),
        new LicenseManagerManifest(),
        new SoftwareManifest(),
        new CustomLicenseManifest(),
        new PlannerPortalManifest(),
        new SoftwareReservationManifest(),
        new ChatbotManifest(),
        new SoftwareDashboardManifest(),
        new ProjectPortalManifest()
    ];
}