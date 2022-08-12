const config = require('../../../config.js');

Feature('CCD 1v1 API test @api-sdo');

Scenario('1v1 full defence - judge draws disposal order', async ({I, api_sdo}) => {
  await api_sdo.createClaimWithRepresentedRespondent(config.applicantSolicitorUser);
  await api_sdo.defendantResponse(config.defendantSolicitorUser);
  await api_sdo.claimantResponse(config.applicantSolicitorUser);
  await api_sdo.createSDO(config.judgeUser);
});

Scenario('1v1 full defence - judge draws small claims WITH sum of damages', async ({I, api_sdo}) => {
  await api_sdo.createClaimWithRepresentedRespondent(config.applicantSolicitorUser);
  await api_sdo.defendantResponse(config.defendantSolicitorUser);
  await api_sdo.claimantResponse(config.applicantSolicitorUser);
  await api_sdo.createSDO(config.judgeUser, 'CREATE_SMALL');
});

Scenario('1v1 full defence - judge draws fast track WITH sum of damages', async ({I, api_sdo}) => {
  await api_sdo.createClaimWithRepresentedRespondent(config.applicantSolicitorUser);
  await api_sdo.defendantResponse(config.defendantSolicitorUser);
  await api_sdo.claimantResponse(config.applicantSolicitorUser);
  await api_sdo.createSDO(config.judgeUser, 'CREATE_FAST');
});

Scenario('1v1 full defence - judge draws small claims WITHOUT sum of damages', async ({I, api_sdo}) => {
  await api_sdo.createClaimWithRepresentedRespondent(config.applicantSolicitorUser);
  await api_sdo.defendantResponse(config.defendantSolicitorUser);
  await api_sdo.claimantResponse(config.applicantSolicitorUser);
  await api_sdo.createSDO(config.judgeUser, 'CREATE_SMALL_NO_SUM');
});

Scenario('1v1 full defence - judge draws fast track WITHOUT sum of damages', async ({I, api_sdo}) => {
  await api_sdo.createClaimWithRepresentedRespondent(config.applicantSolicitorUser);
  await api_sdo.defendantResponse(config.defendantSolicitorUser);
  await api_sdo.claimantResponse(config.applicantSolicitorUser);
  await api_sdo.createSDO(config.judgeUser, 'CREATE_FAST_NO_SUM');
});
