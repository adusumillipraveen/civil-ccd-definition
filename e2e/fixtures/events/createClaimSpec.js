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
        email: 'hmcts.civil+organisation.1.solicitor.1@gmail.com',
      }
    },

    ClaimantSolicitorOrganisation: {
      applicantSolicitor1UserDetails: {
        email: 'civilunspecified@gmail.com',
        id: 'c18d5f8d-06fa-477d-ac09-5b6129828a5b'
      },
      applicant1OrganisationPolicy: {
        OrgPolicyReference: 'Claimant policy reference',
        OrgPolicyCaseAssignedRole: '[APPLICANTSOLICITORONE]',
        Organisation: {
          OrganisationID: 'Q1KOKP2'
        }
      }
    },

    Defendant: {
      respondent1: respondent1WithPartyName
    },

    LegalRepresentation: {
      respondent1Represented: `${legalRepresentation}`
    },

    DefendantSolicitorOrganisation: {
      respondent1OrgRegistered: 'Yes',
      respondent1OrganisationPolicy: {
        OrgPolicyReference: 'Defendant policy reference',
        OrgPolicyCaseAssignedRole: '[RESPONDENTSOLICITORONE]',
        Organisation: {
          OrganisationID: '79ZRSOU'
        },
      },
    },

    DefendantSolicitorEmail: {
      respondentSolicitor1EmailAddress: 'civilunspecified@gmail.com'
    },

    Details: {
      detailsOfClaim: 'Test details of claim'
    },

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
          }
        ]
      }
    },

    // ClaimTimeline in here should be place
    // evidence is missing as well
    // claimAmount missing including total
    // ClaimInterest missing
    // InterestSummary

    ClaimDetails: {
      totalClaimAmount: 300000
    },

    PaymentReference: {
      claimIssuedPaymentDetails:  {
        customerReference: 'Applicant reference'
      }
    },

    StatementOfTruth: {
      uiStatementOfTruth: {
        name: 'John Doe',
        role: 'Test Solicitor'
      }
    },

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

    ClaimantSolicitorServiceAddress: {
      applicantSolicitor1ServiceAddress:  buildAddress('service')
    },

    DefendantSolicitorServiceAddress: {
      respondentSolicitor1ServiceAddress: buildAddress('service')
    },

    ...(mpScenario === 'TWO_V_ONE') ? {
      SecondClaimant: {
        applicant2: applicant2WithPartyName
      },
      SecondClaimantLitigationFriendRequired: {
        applicant2LitigationFriendRequired: 'No'
      },
    }: {},

    AddAnotherDefendant: {
      addRespondent2: 'No'
    },
    ...hasRespondent2(mpScenario) ? {
        SecondDefendant: {},
        SecondDefendantLegalRepresentation: {},
        SecondDefendantSolicitorOrganisation: {},
        SecondDefendantSolicitorServiceAddress: {},
        SecondDefendantSolicitorReference: {},
        SecondDefendantSolicitorEmail: {},
        SameLegalRepresentative: {},
      } : {},
    ClaimType: {
      claimType: 'PERSONAL_INJURY'
    },
    PersonalInjuryType: {
      personalInjuryType: 'ROAD_ACCIDENT'
    },
  };
  switch (mpScenario){
    case 'ONE_V_TWO_ONE_LEGAL_REP': {
      return {
        ...claimData,
        AddAnotherClaimant: {
          addApplicant2: 'No'
        },
        AddAnotherDefendant: {
          addRespondent2: 'Yes'
        },
        SecondDefendant: {
          respondent2: respondent2WithPartyName
        },
        SecondDefendantLegalRepresentation: {
          respondent2Represented: 'Yes'
        },
        SameLegalRepresentative: {
          respondent2SameLegalRepresentative: 'Yes'
        },
      };
    }
    case 'ONE_V_TWO_TWO_LEGAL_REP': {
      return {
        ...claimData,
        AddAnotherClaimant: {
          addApplicant2: 'No'
        },
        AddAnotherDefendant: {
          addRespondent2: 'Yes'
        },
        SecondDefendant: {
          respondent2: respondent2WithPartyName,
        },
        SecondDefendantLegalRepresentation: {
          respondent2Represented: 'Yes'
        },
        SameLegalRepresentative: {
          respondent2SameLegalRepresentative: 'No'
        },
        SecondDefendantSolicitorOrganisation: {
          respondent2OrgRegistered: 'Yes',
          respondent2OrganisationPolicy: {
            OrgPolicyReference: 'Defendant policy reference 2',
            OrgPolicyCaseAssignedRole: '[RESPONDENTSOLICITORTWO]',
            Organisation:

              {OrganisationID: 'H2156A0'}
            ,
          },
        },
        SecondDefendantSolicitorServiceAddress: {
          respondentSolicitor2ServiceAddress: buildAddress('service')
        },
        SecondDefendantSolicitorReference: {
          respondentSolicitor2Reference: 'sol2reference'
        },
        SecondDefendantSolicitorEmail: {
          respondentSolicitor2EmailAddress: 'civilunspecified@gmail.com'
        }
      };
    }
    case 'TWO_V_ONE': {
      return {
        ...claimData,
        AddAnotherClaimant: {
          addApplicant2: 'Yes'
        }
      };
    }
    case 'ONE_V_ONE':
    default: {
      return claimData;
    }
  }
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
  },

  // createClaimLitigantInPerson: {
  //   valid: createClaimData('No', true)
  // },
  // createClaimWithTerminatedPBAAccount: {
  //   valid: createClaimData('Yes', false)
  // },
  // createClaimRespondentSolFirmNotInMyHmcts: {
  //   valid: {
  //     ...createClaimData('Yes', true),
  //     DefendantSolicitorOrganisation: {
  //       respondent1OrgRegistered: 'No'
  //     },
  //     UnRegisteredDefendantSolicitorOrganisation: {
  //       respondentSolicitor1OrganisationDetails: {
  //         organisationName: 'Test org',
  //         phoneNumber: '0123456789',
  //         email: 'test@example.com',
  //         dx: 'test dx',
  //         fax: '123123123',
  //         address: buildAddress('org')
  //       }
  //     },
  //   }
  // }
};
