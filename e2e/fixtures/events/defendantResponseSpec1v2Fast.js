module.exports = {
  respondToClaim: (response = 'FULL_DEFENCE') => {
    const responseData = {
      userInput: {
        ResponseConfirmNameAddress: {
          specAoSApplicantCorrespondenceAddressRequired: 'Yes',
          specAoSRespondent2HomeAddressRequired: 'Yes'
        },
        ResponseConfirmDetails: {
          specAoSRespondentCorrespondenceAddressRequired: 'Yes'
        },
      },
      midEventGeneratedData: {
        ResponseConfirmDetails: {
          showConditionFlags: 'object'
        },
        RespondentResponseTypeSpec: {
          showConditionFlags: 'object'
        },
        defenceRoute: {
          showConditionFlags: 'object'
        },
        defenceAdmittedPartRoute: {
          showConditionFlags: 'object'
        },
        WhenWillClaimBePaid: {
          showConditionFlags: 'object'
        }
      }
    };

    switch (response) {
      case 'FULL_DEFENCE':
        responseData.userInput = {
          ...responseData.userInput,
          SingleResponse: {
            respondentResponseIsSame: 'Yes'
          },
          RespondentResponseTypeSpec: {
            respondent1ClaimResponseTypeForSpec: 'FULL_DEFENCE'
          },
          defenceRoute: {
            defenceRouteRequired: 'DISPUTES_THE_CLAIM'
          },
          Upload: {
            detailsOfWhyDoesYouDisputeTheClaim: 'details'
          },
          HowToAddTimeline: {
            specClaimResponseTimelineList: 'MANUAL'
          },
          FileDirectionsQuestionnaire: {
            respondent1DQFileDirectionsQuestionnaire: {
              explainedToClient: ['CONFIRM'],
              oneMonthStayRequested: 'No',
              reactionProtocolCompliedWith: 'No',
              reactionProtocolNotCompliedWithReason: 'reason'
            }
          },
          DisclosureOfElectronicDocumentsLRspec: {
            specRespondent1DQDisclosureOfElectronicDocuments: {
              agreementLikely: 'No',
              reachedAgreement: 'No',
              reasonForNoAgreement: 'issue'
            }
          },
          DisclosureOfNonElectronicDocumentsLRspec: {
            specRespondent1DQDisclosureOfNonElectronicDocuments: {
              bespokeDirections: 'directions'
            }
          },
          DisclosureReport: {
            respondent1DQDisclosureReport: {
              disclosureFormFiledAndServed: 'Yes',
              disclosureProposalAgreed: 'Yes',
              draftOrderNumber: '123'
            }
          },
          Experts: {
            respondent1DQExperts: {
              expertRequired: 'No'
            },
          },
          Witnesses: {
            respondent1DQWitnesses: {
              witnessesToAppear: 'No'
            }
          },
          Language: {
            respondent1DQLanguage: {
              evidence: 'ENGLISH',
              court: 'ENGLISH',
              documents: 'ENGLISH'
            }
          },
          HearingLRspec: {
            respondent1DQHearing: {
              hearingLength: 'ONE_DAY',
              unavailableDatesRequired: 'No'
            }
          },
          RequestedCourtLocationLRspec: {
            responseClaimCourtLocationRequired: 'No'
          },
          HearingSupport: {
            respondent1DQHearingSupport: {
              signLanguageRequired: null,
              languageToBeInterpreted: null,
              otherSupport: null,
              requirements: ['DISABLED_ACCESS', 'HEARING_LOOPS']
            }
          },
          VulnerabilityQuestions: {
            respondent1DQVulnerabilityQuestions: {
              vulnerabilityAdjustmentsRequired: 'Yes',
              vulnerabilityAdjustments: 'test'
            }
          },
          Applications:{
            additionalInformationForJudge: 'information',
            respondent1DQFutureApplications: {
              intentionToMakeFutureApplications: 'No'
            }
          },
          StatementOfTruth: {
            uiStatementOfTruth: {
              name: 'Test',
              role: 'Worker'
            },
            respondent1DQHearing: {
              unavailableDatesRequired: 'No'
            }
          }
        };
        responseData.midEventData = {
          ...responseData.midEventData,
          RespondentResponseTypeSpec: {
            specFullDefenceOrPartAdmission: 'Yes',
            multiPartyResponseTypeFlags: 'FULL_DEFENCE',
            specFullDefenceOrPartAdmission1V1: 'Yes',
            specDefenceFullAdmittedRequired: 'No',
            specFullAdmissionOrPartAdmission: 'No',
            respondentClaimResponseTypeForSpecGeneric: 'FULL_DEFENCE',
            respondent2SameLegalRepresentative: 'Yes',
            specRespondent1Represented: 'Yes',
            specRespondent2Represented: 'Yes',
            specPaidLessAmountOrDisputesOrPartAdmission: 'Yes',
            fullAdmissionAndFullAmountPaid: 'No',
            partAdmittedByEitherRespondents: 'No',
            defenceAdmitPartPaymentTimeRouteGeneric: 'IMMEDIATELY'
          },

          defenceRoute: {
            responseClaimTrack: 'FAST_CLAIM',
            respondent1ClaimResponsePaymentAdmissionForSpec: 'DID_NOT_PAY',
            specDisputesOrPartAdmission: 'Yes'
          },

          Upload: {
            specDisputesOrPartAdmission: 'Yes'
          },

          ResponseConfirmDetails: {
            sameSolicitorSameResponse: 'Yes'
          },

          ResponseConfirmNameAddress: {
            businessProcess: {
              status: 'FINISHED',
              camundaEvent: 'CREATE_CLAIM_SPEC'
            },
          }
        };
        break;
      case 'FULL_ADMISSION':
        responseData.userInput = {
          ...responseData.userInput,
          SingleResponse: {
            respondentResponseIsSame: 'Yes'
          },
          RespondentResponseTypeSpec: {
            respondent1ClaimResponseTypeForSpec: 'FULL_ADMISSION'
          },
          defenceAdmittedPartRoute: {
            specDefenceFullAdmittedRequired: 'No'
          },
          WhenWillClaimBePaid: {
            defenceAdmitPartPaymentTimeRouteRequired: 'IMMEDIATELY'
          },
          ResponseConfirmNameAddress: {
            businessProcess: {
              status: 'FINISHED',
              camundaEvent: 'CREATE_CLAIM_SPEC'
            },
          },
          defenceRoute: {
            specPaidLessAmountOrDisputesOrPartAdmission: 'No',
          },
          ResponseConfirmDetails: {
            sameSolicitorSameResponse: 'Yes'
          }
        };
        responseData.midEventData = {
          ...responseData.midEventData,
          RespondentResponseTypeSpec: {
            specFullDefenceOrPartAdmission: 'No',
            multiPartyResponseTypeFlags: 'NOT_FULL_DEFENCE',
            specFullDefenceOrPartAdmission1V1: 'No',
            specDefenceFullAdmittedRequired: 'No',
            specFullAdmitPaid: 'No',
            specFullAdmissionOrPartAdmission: 'No',
            respondentClaimResponseTypeForSpecGeneric: 'FULL_ADMISSION',
            fullAdmissionAndFullAmountPaid: 'No',
            partAdmittedByEitherRespondents: 'No',
            defenceAdmitPartPaymentTimeRouteGeneric: 'IMMEDIATELY'
          },
          defenceAdmittedPartRoute: {
            specPaidLessAmountOrDisputesOrPartAdmission: 'No',
            responseClaimTrack: 'FAST_CLAIM',
            specDisputesOrPartAdmission: 'No'
          },
          defenceRoute: {
            respondent1ClaimResponsePaymentAdmissionForSpec: 'DID_NOT_PAY',
            responseClaimTrack: 'FAST_CLAIM',
            specDisputesOrPartAdmission: 'No'
          }
        };
        break;
      case 'PART_ADMISSION':
        responseData.userInput = {
          ...responseData.userInput,
          SingleResponse: {
            respondentResponseIsSame: 'Yes'
          },
          RespondentResponseTypeSpec: {
            respondent1ClaimResponseTypeForSpec: 'PART_ADMISSION'
          },
          defenceAdmittedPartRoute: {
            specDefenceAdmittedRequired: 'No',
            respondToAdmittedClaimOwingAmount: '200000'
          },
          Upload: {
            detailsOfWhyDoesYouDisputeTheClaim: 'details'
          },
          HowToAddTimeline: {
            specClaimResponseTimelineList: 'MANUAL'
          },
          WhenWillClaimBePaid: {
            defenceAdmitPartPaymentTimeRouteRequired: 'IMMEDIATELY'
          },
          FileDirectionsQuestionnaire: {
            respondent1DQFileDirectionsQuestionnaire: {
              explainedToClient: ['CONFIRM'],
              oneMonthStayRequested: 'Yes',
              reactionProtocolCompliedWith: 'Yes'
            }
          },
          DisclosureOfElectronicDocumentsLRspec: {
            specRespondent1DQDisclosureOfElectronicDocuments: {
              reachedAgreement: 'Yes'
            }
          },
          Experts: {
            respondent1DQExperts: {
              expertRequired: 'No'
            }
          },
          Witnesses: {
            respondent1DQWitnesses: {
              witnessesToAppear: 'No'
            }
          },
          Language: {
            respondent1DQLanguage: {
              evidence: 'ENGLISH',
              court: 'ENGLISH',
              documents: 'ENGLISH'
            }
          },
          HearingLRspec: {
            respondent1DQHearing: {
              hearingLength: 'ONE_DAY',
              unavailableDatesRequired: 'No'
            },
          },
          RequestedCourtLocationLRspec: {
            responseClaimCourtLocationRequired: 'No'
          },
          Applications: {
            respondent1DQFutureApplications: {
              intentionToMakeFutureApplications: 'No'
            }
          },
          ResponseConfirmDetails: {
            sameSolicitorSameResponse: 'Yes'
          }
        };
        responseData.midEventData = {
          ...responseData.midEventData,
          RespondentResponseTypeSpec: {
            specFullDefenceOrPartAdmission: 'Yes',
            multiPartyResponseTypeFlags: 'NOT_FULL_DEFENCE',
            specFullDefenceOrPartAdmission1V1: 'Yes',
            specDefenceFullAdmittedRequired: 'No',
            specPartAdmitPaid: 'No',
            specFullAdmissionOrPartAdmission: 'No',
            respondentClaimResponseTypeForSpecGeneric: 'PART_ADMISSION',
            fullAdmissionAndFullAmountPaid: 'No',
            partAdmittedByEitherRespondents: 'No',
            defenceAdmitPartPaymentTimeRouteGeneric: 'IMMEDIATELY'
          },

          defenceAdmittedPartRoute: {
            specPaidLessAmountOrDisputesOrPartAdmission: 'Yes',
            responseClaimTrack: 'FAST_CLAIM',
            specDisputesOrPartAdmission: 'Yes',
            respondToAdmittedClaimOwingAmountPounds: '2000.00'
          },

          ResponseConfirmNameAddress: {
            businessProcess: {
              status: 'FINISHED',
              camundaEvent: 'CREATE_CLAIM_SPEC'
            }
          },

          defenceRoute: {
            respondent1ClaimResponsePaymentAdmissionForSpec: 'DID_NOT_PAY',
            responseClaimTrack: 'FAST_CLAIM',
            specDisputesOrPartAdmission: 'Yes',
            specPaidLessAmountOrDisputesOrPartAdmission: 'Yes'
          }
        };
        break;
      case 'COUNTER_CLAIM':
        responseData.userInput = {
          ...responseData.userInput,
          SingleResponse: {
            respondentResponseIsSame: 'Yes'
          },
          RespondentResponseTypeSpec: {
            respondent1ClaimResponseTypeForSpec: 'COUNTER_CLAIM'
          }
        };
        responseData.midEventData = {
          ...responseData.midEventData,

          ResponseConfirmDetails: {
            sameSolicitorSameResponse: 'Yes'
          },

          RespondentResponseTypeSpec: {
            multiPartyResponseTypeFlags: 'FULL_DEFENCE',
            respondentClaimResponseTypeForSpecGeneric: 'COUNTER_CLAIM',
            sameSolicitorSameResponse: 'Yes',
            specDefenceFullAdmittedRequired: 'No',
            specFullAdmissionOrPartAdmission: 'No',
            specFullDefenceOrPartAdmission: 'No',
            respondent2SameLegalRepresentative: 'Yes',
            specRespondent1Represented: 'Yes',
            specRespondent2Represented: 'Yes',
            fullAdmissionAndFullAmountPaid: 'No',
            partAdmittedByEitherRespondents: 'No',
            defenceAdmitPartPaymentTimeRouteGeneric: 'IMMEDIATELY'
          },

          ResponseConfirmNameAddress: {
            businessProcess: {
              status: 'FINISHED',
              camundaEvent: 'CREATE_CLAIM_SPEC'
            }
          }
        };
        break;

      case 'DIFF_FULL_DEFENCE':
        responseData.userInput = {
          ...responseData.userInput,
          SingleResponse: {
            respondentResponseIsSame: 'No'
          },
          RespondentResponseTypeSpec: {
            respondent1ClaimResponseTypeForSpec: 'FULL_DEFENCE',
            respondent2ClaimResponseTypeForSpec: 'COUNTER_CLAIM'
          },
          defenceRoute: {
            defenceRouteRequired: 'DISPUTES_THE_CLAIM'
          },
          Upload: {
            detailsOfWhyDoesYouDisputeTheClaim: 'details'
          },
          HowToAddTimeline: {
            specClaimResponseTimelineList: 'MANUAL'
          },
          FileDirectionsQuestionnaire: {
            respondent1DQFileDirectionsQuestionnaire: {
              explainedToClient: ['CONFIRM'],
              oneMonthStayRequested: 'No',
              reactionProtocolCompliedWith: 'No',
              reactionProtocolNotCompliedWithReason: 'reason'
            }
          },
          DisclosureOfElectronicDocumentsLRspec: {
            specRespondent1DQDisclosureOfElectronicDocuments: {
              agreementLikely: 'No',
              reachedAgreement: 'No',
              reasonForNoAgreement: 'issue'
            }
          },
          DisclosureOfNonElectronicDocumentsLRspec: {
            specRespondent1DQDisclosureOfNonElectronicDocuments: {
              bespokeDirections: 'directions'
            }
          },
          DisclosureReport: {
            respondent1DQDisclosureReport: {
              disclosureFormFiledAndServed: 'Yes',
              disclosureProposalAgreed: 'Yes',
              draftOrderNumber: '123'
            }
          },
          Experts: {
            respondent1DQExperts: {
              expertRequired: 'No'
            },
          },
          Witnesses: {
            respondent1DQWitnesses: {
              witnessesToAppear: 'No'
            }
          },
          Language: {
            respondent1DQLanguage: {
              evidence: 'ENGLISH',
              court: 'ENGLISH',
              documents: 'ENGLISH'
            }
          },
          HearingLRspec: {
            respondent1DQHearing: {
              hearingLength: 'ONE_DAY',
              unavailableDatesRequired: 'No'
            }
          },
          RequestedCourtLocationLRspec: {
            responseClaimCourtLocationRequired: 'No'
          },
          HearingSupport: {
            respondent1DQHearingSupport: {
              signLanguageRequired: null,
              languageToBeInterpreted: null,
              otherSupport: null,
              requirements: ['DISABLED_ACCESS', 'HEARING_LOOPS']
            }
          },
          VulnerabilityQuestions: {
            respondent1DQVulnerabilityQuestions: {
              vulnerabilityAdjustmentsRequired: 'Yes',
              vulnerabilityAdjustments: 'test'
            }
          },
          Applications:{
            additionalInformationForJudge: 'information',
            respondent1DQFutureApplications: {
              intentionToMakeFutureApplications: 'No'
            }
          },
          StatementOfTruth: {
            uiStatementOfTruth: {
              name: 'Test',
              role: 'Worker'
            },
            respondent1DQHearing: {
              unavailableDatesRequired: 'No'
            }
          }
        };
        responseData.midEventData = {
          ...responseData.midEventData,
          ResponseConfirmDetails: {
            sameSolicitorSameResponse: 'Yes'
          },

          RespondentResponseTypeSpec: {
            respondentClaimResponseTypeForSpecGeneric: 'FULL_DEFENCE',
            sameSolicitorSameResponse: 'No',
            specDefenceFullAdmittedRequired: 'No',
            specFullAdmissionOrPartAdmission: 'No',
            specFullDefenceOrPartAdmission1V1: 'Yes',
            specFullDefenceOrPartAdmission: 'Yes',
            specRespondent1Represented: 'Yes',
            specRespondent2Represented: 'Yes',
            respondent2SameLegalRepresentative: 'Yes',
            fullAdmissionAndFullAmountPaid: 'No',
            partAdmittedByEitherRespondents: 'No',
            defenceAdmitPartPaymentTimeRouteGeneric: 'IMMEDIATELY',
            multiPartyResponseTypeFlags: 'COUNTER_ADMIT_OR_ADMIT_PART'
          },

          defenceRoute: {
            responseClaimTrack: 'FAST_CLAIM',
            specPaidLessAmountOrDisputesOrPartAdmission: 'Yes',
            respondent1ClaimResponsePaymentAdmissionForSpec: 'DID_NOT_PAY',
            specDisputesOrPartAdmission: 'Yes'
          },

          Upload: {
            specDisputesOrPartAdmission: 'Yes'
          },

          ResponseConfirmNameAddress: {
            businessProcess: {
              status: 'FINISHED',
              camundaEvent: 'CREATE_CLAIM_SPEC'
            },
          },

          SingleResponse: {
            sameSolicitorSameResponse: 'No'
          }
        };
        break;

      case 'DIFF_NOT_FULL_DEFENCE':
        responseData.userInput = {
          ...responseData.userInput,
          SingleResponse: {
            respondentResponseIsSame: 'No'
          },
          RespondentResponseTypeSpec: {
            respondent1ClaimResponseTypeForSpec: 'FULL_ADMISSION',
            respondent2ClaimResponseTypeForSpec: 'COUNTER_CLAIM'
          }
        };
        responseData.midEventData = {
          ...responseData.midEventData,
          ResponseConfirmDetails: {
            sameSolicitorSameResponse: 'Yes'
          },

          RespondentResponseTypeSpec: {
            multiPartyResponseTypeFlags: 'COUNTER_ADMIT_OR_ADMIT_PART',
            sameSolicitorSameResponse: 'No',
            specDefenceFullAdmittedRequired: 'No',
            specFullAdmissionOrPartAdmission: 'No',
            specFullDefenceOrPartAdmission: 'No',
            specRespondent1Represented: 'Yes',
            specRespondent2Represented: 'Yes',
            respondent2SameLegalRepresentative: 'Yes',
            fullAdmissionAndFullAmountPaid: 'No',
            partAdmittedByEitherRespondents: 'No',
            respondentClaimResponseTypeForSpecGeneric: 'FULL_ADMISSION',
            defenceAdmitPartPaymentTimeRouteGeneric: 'IMMEDIATELY'
          },

          ResponseConfirmNameAddress: {
            businessProcess: {
              status: 'FINISHED',
              camundaEvent: 'CREATE_CLAIM_SPEC'
            }
          },

          SingleResponse: {
            sameSolicitorSameResponse: 'No'
          }
        };
        break;

    }

    return responseData;
  }
};
