const {listElement, buildAddress } = require('../../api/dataHelper');
const uuid = require('uuid');

const docUuid = uuid.v1();

const respondent1 = {
  type: 'INDIVIDUAL',
  individualFirstName: 'John',
  individualLastName: 'Doe',
  individualTitle: 'Sir',
  primaryAddress: buildAddress('respondent')
};
const respondent2 = {
  type: 'INDIVIDUAL',
  individualFirstName: 'Foo',
  individualLastName: 'Bar',
  individualTitle: 'Dr',
  primaryAddress: buildAddress('second respondent')
};
const respondent1WithPartyName = {
  ...respondent1,
  partyName: 'Sir John Doe',
  partyTypeDisplayValue: 'Individual',
};
const respondent2WithPartyName = {
  ...respondent2,
  partyName: 'Dr Foo Bar',
  partyTypeDisplayValue: 'Individual',
};
const applicant1 = {
  type: 'COMPANY',
  companyName: 'Test Inc',
  primaryAddress: buildAddress('applicant')
};
const applicant1WithPartyName = {
  ...applicant1,
  partyName: 'Test Inc',
  partyTypeDisplayValue: 'Company',
};

const applicant2 = {
  type: 'INDIVIDUAL',
  individualFirstName: 'Jane',
  individualLastName: 'Doe',
  individualTitle: 'Dr',
  primaryAddress: buildAddress('second applicant')
};

const applicant2WithPartyName = {
  ...applicant2,
  partyName: 'Dr Jane Doe',
  partyTypeDisplayValue: 'Individual',
};

let selectedPba = listElement('PBA0088192');
const validPba = listElement('PBA0088192');
const invalidPba = listElement('PBA0078095');

const createClaimData = (legalRepresentation, useValidPba, mpScenario) => {
  selectedPba = useValidPba ? validPba : invalidPba;
  const claimData = {
    References: {
      solicitorReferences: {
        applicantSolicitor1Reference: 'Applicant reference',
        respondentSolicitor1Reference: 'Respondent reference'
      }
    },

    Claimant: {
      applicant1: applicant1WithPartyName
    },

    AddAnotherClaimant: {
      addApplicant2: 'No'
    },

    Notifications: {
      applicantSolicitor1CheckEmail: {
        correct: 'No',
      },
      applicantSolicitor1UserDetails: {
        email: 'hmcts.civil+organisation.1.solicitor.1@gmail.com',
      }
    },

    ClaimantSolicitorOrganisation: {
      applicant1OrganisationPolicy: {
        OrgPolicyReference: 'Claimant policy reference',
        OrgPolicyCaseAssignedRole: '[APPLICANTSOLICITORONESPEC]',
        Organisation: {
          OrganisationID: 'Q1KOKP2',
          OrganisationName: 'Civil - Organisation 1'
        }
      }
    },

    specCorrespondenceAddress: {
      specApplicantCorrespondenceAddressRequired: 'No'
    },


    Defendant: {
      respondent1: respondent1
    },

    LegalRepresentation: {
      specRespondent1Represented: `${legalRepresentation}`
    },

    DefendantSolicitorOrganisation: {
      respondent1OrgRegistered: 'Yes',
      respondent1OrganisationPolicy: {
        OrgPolicyReference: 'Defendant policy reference',
        OrgPolicyCaseAssignedRole: '[RESPONDENTSOLICITORONESPEC]',
        Organisation: {
          OrganisationID: '79ZRSOU',
          OrganisationName: 'Civil - Organisation 2'
        },
      },
    },

    specRespondentCorrespondenceAddress: {
      specRespondentCorrespondenceAddressRequired: 'No'
    },

    AddAnotherDefendant: {
      addRespondent2: 'No'
    },

    Details: {
      detailsOfClaim: 'Test details of claim'
    },

    DefendantSolicitorEmail: {
      respondentSolicitor1EmailAddress: 'civilunspecified@gmail.com'
    },

    UploadClaimDocument: {
      specClaimTimelineList: 'MANUAL'
    },

    ClaimTimeline: {
      timelineOfEvents: [
        {
          value: {
            timelineDate: '2021-11-11',
            timelineDescription: 'Test timeline description'
          }
        }
      ]
    },

    EvidenceList: {
      speclistYourEvidenceList: [
        {
          value: {
            contractAndAgreementsEvidence: 'Test description of evidence and agreements',
            evidenceType: 'CONTRACT_AND_AGREEMENTS'
          }
        }
      ]
    },

    ClaimAmount: {
      claimAmountBreakup: [
        {
          value: {
            claimReason: 'Test reason',
            claimAmount: '11222'
          }
        }
      ]
    },

    ClaimAmountDetails: {
      superClaimType: 'SPEC_CLAIM',
      totalClaimAmount: 11222
    },

    ClaimInterest: {
      claimInterests: 'No'
    },

    PbaNumber: {
      applicantSolicitor1PbaAccounts:{
        value: {
          code: '4fe1e47c-d40c-4c3c-bd71-60eab54418cd',
          label: 'PBA0088192'
        }
      },
      claimFee: {
        calculatedAmountInPence: '150000',
        code: 'FEE0209',
      }
    },

    PaymentReference: {
      claimIssuedPaymentDetails: {
        customerReference: 'Applicant references'
      }
    },

    StatementOfTruth: {
      uiStatementOfTruth: {
        name: 'John Doe',
        role: 'Test Solicitor'
      }
    },

  //   Upload: {
  //     servedDocumentFiles: {
  //       particularsOfClaimDocument: [
  //         {
  //           id: docUuid,
  //           value: {
  //             document_url: '${TEST_DOCUMENT_URL}',
  //             document_binary_url: '${TEST_DOCUMENT_BINARY_URL}',
  //             document_filename: '${TEST_DOCUMENT_FILENAME}'
  //           }
  //         }
  //       ]
  //     }
  //   },
  //
  //   ClaimDetails: {
  //     totalClaimAmount: 300000
  //   },
  //
  //
  //
  //   ClaimValue: {
  //     applicantSolicitor1PbaAccounts: {
  //       list_items: [
  //         validPba,
  //         invalidPba
  //       ],
  //       value: selectedPba
  //     },
  //     claimValue: {
  //       statementOfValueInPennies: '3000000'
  //     },
  //     claimFee: {
  //       calculatedAmountInPence: '150000',
  //       code: 'FEE0209',
  //       version: '3'
  //     },
  //   },
  //
  //   ClaimantSolicitorServiceAddress: {
  //     applicantSolicitor1ServiceAddress:  buildAddress('service')
  //   },
  //
  //   DefendantSolicitorServiceAddress: {
  //     respondentSolicitor1ServiceAddress: buildAddress('service')
  //   },
  //
  //   ...(mpScenario === 'TWO_V_ONE') ? {
  //     SecondClaimant: {
  //       applicant2: applicant2WithPartyName
  //     },
  //     SecondClaimantLitigationFriendRequired: {
  //       applicant2LitigationFriendRequired: 'No'
  //     },
  //   }: {},
  //
  //   ...hasRespondent2(mpScenario) ? {
  //       SecondDefendant: {},
  //       SecondDefendantLegalRepresentation: {},
  //       SecondDefendantSolicitorOrganisation: {},
  //       SecondDefendantSolicitorServiceAddress: {},
  //       SecondDefendantSolicitorReference: {},
  //       SecondDefendantSolicitorEmail: {},
  //       SameLegalRepresentative: {},
  //     } : {},
  //   ClaimType: {
  //     claimType: 'PERSONAL_INJURY'
  //   },
  //   PersonalInjuryType: {
  //     personalInjuryType: 'ROAD_ACCIDENT'
  //   },
  };
  // switch (mpScenario){
  //   case 'ONE_V_TWO_ONE_LEGAL_REP': {
  //     return {
  //       ...claimData,
  //       AddAnotherClaimant: {
  //         addApplicant2: 'No'
  //       },
  //       AddAnotherDefendant: {
  //         addRespondent2: 'Yes'
  //       },
  //       SecondDefendant: {
  //         respondent2: respondent2WithPartyName
  //       },
  //       SecondDefendantLegalRepresentation: {
  //         respondent2Represented: 'Yes'
  //       },
  //       SameLegalRepresentative: {
  //         respondent2SameLegalRepresentative: 'Yes'
  //       },
  //     };
  //   }
  //   case 'ONE_V_TWO_TWO_LEGAL_REP': {
  //     return {
  //       ...claimData,
  //       AddAnotherClaimant: {
  //         addApplicant2: 'No'
  //       },
  //       AddAnotherDefendant: {
  //         addRespondent2: 'Yes'
  //       },
  //       SecondDefendant: {
  //         respondent2: respondent2WithPartyName,
  //       },
  //       SecondDefendantLegalRepresentation: {
  //         respondent2Represented: 'Yes'
  //       },
  //       SameLegalRepresentative: {
  //         respondent2SameLegalRepresentative: 'No'
  //       },
  //       SecondDefendantSolicitorOrganisation: {
  //         respondent2OrgRegistered: 'Yes',
  //         respondent2OrganisationPolicy: {
  //           OrgPolicyReference: 'Defendant policy reference 2',
  //           OrgPolicyCaseAssignedRole: '[RESPONDENTSOLICITORTWO]',
  //           Organisation:
  //
  //             {OrganisationID: 'H2156A0'}
  //           ,
  //         },
  //       },
  //       SecondDefendantSolicitorServiceAddress: {
  //         respondentSolicitor2ServiceAddress: buildAddress('service')
  //       },
  //       SecondDefendantSolicitorReference: {
  //         respondentSolicitor2Reference: 'sol2reference'
  //       },
  //       SecondDefendantSolicitorEmail: {
  //         respondentSolicitor2EmailAddress: 'civilunspecified@gmail.com'
  //       }
  //     };
  //   }
  //   case 'TWO_V_ONE': {
  //     return {
  //       ...claimData,
  //       AddAnotherClaimant: {
  //         addApplicant2: 'Yes'
  //       }
  //     };
  //   }
  //   case 'ONE_V_ONE':
  //   default: {
  //     return claimData;
  //   }
  // }
};

const hasRespondent2 = (mpScenario) => {
  return mpScenario === 'ONE_V_TWO_ONE_LEGAL_REP'
      || mpScenario ===  'ONE_V_TWO_TWO_LEGAL_REP';
};

module.exports = {
  createClaim: (mpScenario = 'ONE_V_ONE') => {
    return {
      midEventData: {
        ClaimValue: {
          applicantSolicitor1PbaAccounts: {
            list_items: [
              validPba,
              invalidPba
            ],
            value: selectedPba
          },
          claimValue: {
            statementOfValueInPennies: '3000000'
          },
          claimFee: {
            calculatedAmountInPence: '150000',
            code: 'FEE0209',
            version: '3'
          },
        },


        PbaNumber: {
          applicantSolicitor1PbaAccounts: {
            list_items: [
              validPba,
              invalidPba
            ],
            value: selectedPba
          }
        },

        StatementOfTruth: {
          applicantSolicitor1ClaimStatementOfTruth: {}
        },
      },
      valid: {
        ...createClaimData('Yes', true, mpScenario),
      },
      invalid: {
        Upload: {
          servedDocumentFiles: {
            particularsOfClaimDocument: [
              {
                id: docUuid,
                value: {
                  document_url: '${TEST_DOCUMENT_URL}',
                  document_binary_url: '${TEST_DOCUMENT_BINARY_URL}',
                  document_filename: '${TEST_DOCUMENT_FILENAME}'
                }
              },
              {
                id: docUuid,
                value: {
                  document_url: '${TEST_DOCUMENT_URL}',
                  document_binary_url: '${TEST_DOCUMENT_BINARY_URL}',
                  document_filename: '${TEST_DOCUMENT_FILENAME}'
                }
              }
            ]
          }
        },
        Court: {
          courtLocation: {
            applicantPreferredCourt: ['3a3', '21', '3333']
          }
        }
      }
    };
  }
};
