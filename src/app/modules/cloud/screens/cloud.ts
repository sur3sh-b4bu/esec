import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { CloudAdobe } from './cloud-adobe/cloud-adobe';
import { CloudAft } from './cloud-aft/cloud-aft';
import { CloudAltium } from './cloud-altium/cloud-altium';
import { CloudAnydesk } from './cloud-anydesk/cloud-anydesk';
import { CloudAutodesk } from './cloud-autodesk/cloud-autodesk';
import { CloudAutomationAnywhere } from './cloud-automation-anywhere/cloud-automation-anywhere';
import { CloudAveva } from './cloud-aveva/cloud-aveva';
import { CloudBentley } from './cloud-bentley/cloud-bentley';
import { CloudBentleyReal } from './cloud-bentley-real/cloud-bentley-real';
import { CloudBrixlab } from './cloud-brixlab/cloud-brixlab';
import { CloudConfluence } from './cloud-confluence/cloud-confluence';
import { CloudCrowdstrike } from './cloud-crowdstrike/cloud-crowdstrike';
import { CloudCsi } from './cloud-csi/cloud-csi';
import { CloudFigma } from './cloud-figma/cloud-figma';
import { CloudForescout } from './cloud-forescout/cloud-forescout';
import { CloudGithub } from './cloud-github/cloud-github';
import { CloudHexagon } from './cloud-hexagon/cloud-hexagon';
import { CloudIserve } from './cloud-iserve/cloud-iserve';
import { CloudJira } from './cloud-jira/cloud-jira';
import { CloudKepware } from './cloud-kepware/cloud-kepware';
import { CloudMcafee } from './cloud-mcafee/cloud-mcafee';
import { CloudMicrosoft } from './cloud-microsoft/cloud-microsoft';
import { CloudMilestone } from './cloud-milestone/cloud-milestone';
import { CloudMtLinki } from './cloud-mt-linki/cloud-mt-linki';
import { CloudMulesoft } from './cloud-mulesoft/cloud-mulesoft';
import { CloudOmnissa } from './cloud-omnissa/cloud-omnissa';
import { CloudOpentextEcm } from './cloud-opentext-ecm/cloud-opentext-ecm';
import { CloudOracle } from './cloud-oracle/cloud-oracle';
import { CloudQlik } from './cloud-qlik/cloud-qlik';
import { CloudQualys } from './cloud-qualys/cloud-qualys';
import { CloudRedHat } from './cloud-red-hat/cloud-red-hat';
import { CloudSeclore } from './cloud-seclore/cloud-seclore';
import { CloudSecurityscorecard } from './cloud-securityscorecard/cloud-securityscorecard';
import { CloudSerena } from './cloud-serena/cloud-serena';
import { CloudSnyk } from './cloud-snyk/cloud-snyk';
import { CloudSprinklr } from './cloud-sprinklr/cloud-sprinklr';
import { CloudThales } from './cloud-thales/cloud-thales';
import { CloudUploader } from './cloud-uploader/cloud-uploader';
import { CloudVeritas } from './cloud-veritas/cloud-veritas';
import { CloudWiz } from './cloud-wiz/cloud-wiz';
import { CloudZoiper } from './cloud-zoiper/cloud-zoiper';

@Component({
  selector: 'app-cloud',
  imports: [
    CloudAdobe,
    CloudAft,
    CloudAltium,
    CloudAnydesk,
    CloudAutodesk,
    CloudAutomationAnywhere,
    CloudAveva,
    CloudBentley,
    CloudBentleyReal,
    CloudBrixlab,
    CloudConfluence,
    CloudCrowdstrike,
    CloudCsi,
    CloudFigma,
    CloudForescout,
    CloudGithub,
    CloudHexagon,
    CloudIserve,
    CloudJira,
    CloudKepware,
    CloudMcafee,
    CloudMicrosoft,
    CloudMilestone,
    CloudMtLinki,
    CloudMulesoft,
    CloudOmnissa,
    CloudOpentextEcm,
    CloudOracle,
    CloudQlik,
    CloudQualys,
    CloudRedHat,
    CloudSeclore,
    CloudSecurityscorecard,
    CloudSerena,
    CloudSnyk,
    CloudSprinklr,
    CloudThales,
    CloudUploader,
    CloudVeritas,
    CloudWiz,
    CloudZoiper
  ],
  templateUrl: './cloud.html',
  styleUrl: './cloud.css',
})
export class Cloud {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
