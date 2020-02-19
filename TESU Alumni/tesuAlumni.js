

$(document).ready(function(){

    $("#newCampaignAll").click(newCampaignAll);

    $("#updateCampaignALL").click(updateCampaignAll);

    $("#newCampaignMeta").click(newCampaignMeta);

    $("#updateCampaignMeta").click(updateCampaignMeta);

    $("#publishStoryTopics").click(publishTopicsMeta);

    $("#publishNodesMeta").click(publishNodesMeta);

    $("#publishNodeInputContent").click(publishNodeInputContent);

    $("#publishNodeOutputContent").click(publishNodeOutputContent);

    $("#campaignActivateParams").click(publishActivateParameters);

    $("#campaignSetupParams").click(publishSetupParameters);

    $("#campaignConverionGoal").click(publishCampaignConversionGoals);

    $("#paymentProcessorMeta").click(publishPaymentProcessorMeta);

    $("#paymentProcessor").click(publishPaymentProcessorInput);

    $("#endPublishing").click(endPublishing);

    var
    trackingID= 696,
    useCaseID = 2,
    variationID = 1,
    postAPI = "http://127.0.0.1:8000/api/webhooks",

    campaignMetaUpdate = [
      {
        "metaData": {
          "trid": trackingID
        }
      },
      {
        "returnedData":

          {
            "ctype":"update",
            "vaid": variationID,
            "uscs": useCaseID,
            "tcnt": "1",
            "ncnt": "18",
            "cnam": "Thomas Edison Fund Raising",
            "cimod": "PR-1",
            "webproperty": "bs-local.com"
          }


      }
    ],

    campaignMetaNew = [
        {
          "metaData": {
            "trid": trackingID
          }
        },
        {
          "returnedData":

            {
              "ctype":"new",
              "vaid": variationID,
              "uscs": useCaseID,
              "tcnt": "1",
              "ncnt": "3",
              "cnam": "Update to TESU Alumni",
              "cimod": "PR-1",
              "webproperty": "bs-local.com"
            }


        }
      ],

    storyTopicsMeta = [
     {
       "metaData": {
         "trid": trackingID
       }
     },
     {
       "returnedData": [

         {
           "topicID": 0,
           "topicName": "Start a Conversation"
         }, // topic 0

         {
           "topicID": 1,
           "topicName": "Become a TESU Genius"
         }, // topic 1
         {
           "topicID": 2,
           "topicName": "Share a Job "
         }, // topic 2
         {
           "topicID": 3,
           "topicName": "Help Your Alma Mater"
         }, // topic 3
         {
           "topicID": 4,
           "topicName": "Recent TESU Update"
         } // topic 4

     ]
     }
    ],

    storyNodesMeta = [
      {
        "metaData": {
          "trid": trackingID
        }
      },
      {
        "returnedData": [

          {
            "topicID": 0,
            "nodeOrder": 0,
            "nodeDisplayName": "Start Conversation",
            "nodeTemplateCategory": "initiateConversation",
            "skipLogicType": "default",
            "skipLogic": [
            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // start conversation

          {
            "topicID": 1,
            "nodeOrder": 0,
            "nodeDisplayName": "Select a Genius Category",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "inventor",
                "skipTo": 1
              },
              {
                "resp": "wizard",
                "skipTo": 5
              },
              {
                "resp": "investor",
                "skipTo": 11
              },
              {
                "resp": "illuminator",
                "skipTo": 16
              },
              {
                "resp": "entrepreneur",
                "skipTo": 18
              },
            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // TESU Genius - topic 1,  0;  nodeTemplateCategory = close Ended Question
          {
            "topicID": 1,
            "nodeOrder": 1,
            "nodeDisplayName": "Share your Business Profile with TESU Community",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // INVENTOR - topic 1, 1, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 1,
            "nodeOrder": 2,
            "nodeDisplayName": "Share your Business Accomplishments",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 1, 2
          {
            "topicID": 1,
            "nodeOrder": 3,
            "nodeDisplayName": "Please Help TESU",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "no",
                "skipTo": 4
              },
              {
                "resp": "yes",
                "skipTo": 18
              }

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 1,3
          {
            "topicID": 1,
            "nodeOrder": 4,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 1, 4
          {
            "topicID": 1,
            "nodeOrder": 5,
            "nodeDisplayName": "Here is What You Can Get as Ambassador",
            "nodeTemplateCategory": "imageGallery",
            "skipLogicType": "default",
            "skipLogic": [
            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 5
          {
            "topicID": 1,
            "nodeOrder": 6,
            "nodeDisplayName": "Select How You Would Like to Contribute",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 6 WIZARD - topic 1, 1, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 1,
            "nodeOrder": 7,
            "nodeDisplayName": "Enter Your Profile",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 1,7
          {
            "topicID": 1,
            "nodeOrder": 8,
            "nodeDisplayName": "Tell Us How TESU Changed Your Life",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 1, 8
          {
            "topicID": 1,
            "nodeOrder": 9,
            "nodeDisplayName": "Please Help TESU",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "no",
                "skipTo": 10
              },
              {
                "resp": "yes",
                "skipTo": 18
              }

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 1,9
          {
            "topicID": 1,
            "nodeOrder": 10,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 10
          {
            "topicID": 1,
            "nodeOrder": 11,
            "nodeDisplayName": "Refer Someone You Know",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 11
          {
            "topicID": 1,
            "nodeOrder": 12,
            "nodeDisplayName": "Referees Interest",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 12
          {
          "topicID": 1,
              "nodeOrder": 13,
              "nodeDisplayName": "Tell Us About Your Self",
              "nodeTemplateCategory": "contactDataCollector",
              "skipLogicType": "default",
              "skipLogic": [

            ],
              "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 13 INVESTOR topic 2, node order 0;  nodeTemplateCategory = paymentProcessor
          {
            "topicID": 1,
            "nodeOrder": 14,
            "nodeDisplayName": "Please Help TESU",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
            {
              "resp": "no",
              "skipTo": 15
            },
            {
              "resp": "yes",
              "skipTo": 18
            }

          ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 1, 14
          {
            "topicID": 1,
            "nodeOrder": 15,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 15
          {
            "topicID": 1,
            "nodeOrder": 16,
            "nodeDisplayName": "Show Your Pride In Being TESU Graduate ",
            "nodeTemplateCategory": "imageGallery",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 16 Illumnitor topic 2, node order 0;  nodeTemplateCategory = paymentProcessor
          {
            "topicID": 1,
            "nodeOrder": 17,
            "nodeDisplayName": "Online Store",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://tesushop.com/collections/alumni"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 17 // go to online store
          {
            "topicID": 1,
            "nodeOrder": 18,
            "nodeDisplayName": "What Would You Like To Support",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 18 Entrepreneur- as-is; topic 3, node order 0;  nodeTemplateCategory = paymentProcessor
          {
            "topicID": 1,
            "nodeOrder": 19,
            "nodeDisplayName": "Select Donation Amount",
            "nodeTemplateCategory": "paymentProcessor",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 19, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 1,
            "nodeOrder": 20,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 1, 20

          {
            "topicID": 2,
            "nodeOrder": 0,
            "nodeDisplayName": "What Type of Job You Would Like to Share",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // Share a Job Profile - topic 2,0, node order 1, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 2,
            "nodeOrder": 1,
            "nodeDisplayName": "Contact of Person Handling Applicants",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 2, 1
          {
            "topicID": 2,
            "nodeOrder": 2,
            "nodeDisplayName": "Job Overview",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 2, 2
          {
            "topicID": 2,
            "nodeOrder": 3,
            "nodeDisplayName": "Job Description",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 2, 3
          {
            "topicID": 2,
            "nodeOrder": 4,
            "nodeDisplayName": "Your Contact Information",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 2, 4
          {
            "topicID": 2,
            "nodeOrder": 5,
            "nodeDisplayName": "Please Help TESU",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "no",
                "skipTo": 8
              },
              {
                "resp": "yes",
                "skipTo": 6
              }

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 2, 5
          {
            "topicID": 2,
            "nodeOrder": 6,
            "nodeDisplayName": "What Would You Like To Support",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 2, 6 Entrepreneur- as-is; topic 3, node order 0;  nodeTemplateCategory = paymentProcessor
          {
            "topicID": 2,
            "nodeOrder": 7,
            "nodeDisplayName": "Select Donation Amount",
            "nodeTemplateCategory": "paymentProcessor",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 2, 7, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 2,
            "nodeOrder": 8,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 2, 8

          {
            "topicID": 3,
            "nodeOrder": 0,
            "nodeDisplayName": "What Would You Like To Support",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // Help Alamater - 3,0 DONE - as-is; topic 3, node order 0;  nodeTemplateCategory = paymentProcessor
          {
            "topicID": 3,
            "nodeOrder": 1,
            "nodeDisplayName": "Select Donation Amount",
            "nodeTemplateCategory": "paymentProcessor",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 3,1 node order 1, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 3,
            "nodeOrder": 2,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 3,2

          {
            "topicID": 4,
            "nodeOrder": 0,
            "nodeDisplayName": "Marvin D. Swede Johnson CASE Award Recipient",
            "nodeTemplateCategory": "audioVideoMessage",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 4,0 node order 1,
          {
            "topicID": 4,
            "nodeOrder": 1,
            "nodeDisplayName": "Thomas C. Streckewald Memorial Golf Classic - 2019",
            "nodeTemplateCategory": "imageGallery",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 4,1 node order 1,
          {
            "topicID": 4,
            "nodeOrder": 2,
            "nodeDisplayName": "Check Out Our Alumni Ambassadors",
            "nodeTemplateCategory": "flippableContentCard",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 4,2 node order 0;
          {
            "topicID": 4,
            "nodeOrder": 3,
            "nodeDisplayName": "Please Help TESU",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "no",
                "skipTo": 6
              },
              {
                "resp": "yes",
                "skipTo": 4
              }

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // topic 4, 3
          {
            "topicID": 4,
            "nodeOrder": 4,
            "nodeDisplayName": "What Would You Like To Support",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          },
          {
            "topicID": 4,
            "nodeOrder": 5,
            "nodeDisplayName": "Select Donation Amount",
            "nodeTemplateCategory": "paymentProcessor",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // 4,5
          {
            "topicID": 4,
            "nodeOrder": 6,
            "nodeDisplayName": "Thanks!",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.tesu.edu/"}],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, //  topic 4, 6


        ]
      }
    ],


   // termination mode can be "exitOnNewPage", exitOnCurrentPage, exitWithWithoutMessage
   // if exitOnNewPage then skipto for skipType end should have the url;

    storyNodesInputContent = [

      {
        "topicID": 0,
        "nodeOrder": 0,
        "nodeDisplayName": "Please Select An Area of Interest",
        "nodeContentId": '696_0_0',
        "nodeTemplateCategory": "initiateConversation",
        "answerRequired": true,
        "conversationBlurbs":["Hi there", "I am here to give you a quick update on TESU", "And hopefully get you to support your college", "There are many different ways you can contribute"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "Become a TESU Genius",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "visitorinterest",
              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/innovation.png",

              "sublabel": "Join the Genius Program & Promote TESU Mission",

              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Share a Job",
              "valueType": "",
              "name": "visitorinterest",

              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/network.png",
              "sublabel": "Share a Job & Tap into Skilled TESU Community",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Help Your Alma Mater",
              "valueType": "",
              "name": "visitorinterest",

              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/fundraising.png",
              "sublabel": "Donate to Help Your Alma Mater Flourish",
              "cta": "Check Out!",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Recent TESU Update",
              "valueType": "",
              "name": "visitorinterest",
              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/overview.png",
              "sublabel": "Check Out Recent Events & Happenings at TESU",
              "cta": "Browse",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // initiate conversation

      {
        "topicID": 1,
        "nodeOrder": 0,
        "nodeDisplayName": "Become a TESU Genius - Complete Tasks Below",
        "nodeContentId": '696_1_0', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Become part of the Genius Program", "Complete the tasks below", "Help Us - You will get recognized on the website", "We will also send you a TESU Challenge coin"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
          "da_ddf": {
            "value": "inventor",
            "valueType": "", // this is css related stuff; ok for now;
            "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Be An Inventor",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
          [{
            "da_ddf": {
              "value": "entrepreneur",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be an Entrepreneur",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "wizard",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be a Wizard",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "investor",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be an Investor",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "illuminator",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be an Illuminator",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]
        ]
      }, // TESU Genius -Become a Genius - topic 1, 0 the keys HAVE to match the payment processor subcategory
      {
        "topicID": 1,
        "nodeOrder": 1,
        "nodeDisplayName": "Share your Business Profile with TESU Community",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_1', // tracking id, topic id, node id
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please share your business profile", "Share your accomplishments too", "Our graduates need role models such as you"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
          "da_ddf": {
            "value": "",
            "valueType": "",
            "name": "personName",
            "label": "Your Name",
            "required": true
          },
          "da_meob": {
            "precedence": 2, // not used, remove it
            "da_disob": true,
            "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
          }
        }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "http://",
              "valueType": "",
              "name": "linkedin",
              "label": "LinkedIn Profile Handle",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "openEnded",
              "name": "highlights",
              "label": "A Few Highlights of Your Career",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 1
      {
        "topicID": 1,
        "nodeOrder": 2,
        "nodeDisplayName": "Share your Business Accomplishments",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_2', // tracking id, topic id, node id
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please share your business profile", "Share your accomplishments too", "Our graduates need role models such as you"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "http://",
              "valueType": "",
              "name": "linkedin",
              "label": "LinkedIn Profile Handle",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "openEnded",
              "name": "highlights",
              "label": "A Few Highlights of Your Career",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 2
      {
        "topicID": 1,
        "nodeOrder": 3,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_1_3', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Thank you so much for providing us your information", "We need help from successful alumni such as you ", "Please help out with a small donation", "Every little bit counts"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 1, 3
      {
        "topicID": 1,
        "nodeOrder": 4,
        "nodeDisplayName": "Thanks!",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_1_4',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 4
      {
        "topicID": 1,
        "nodeOrder": 5,
        "nodeDisplayName": "Here is What You Can Get as a Wizard",
        "nodeContentId": '696_1_5', // tracking id, topic id, node id
        "nodeTemplateCategory": "imageGallery",
        "answerRequired": true,
        "imageType": "fullsize",
        "conversationBlurbs":["As a wizard all that we ask you is to give ONE hour of your time", "Only one hour helping TEST", "In return you get a few token gifts from us a thank you","And satisfaction for helping us out"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/pencoders.jpg",
                    "imgCaption":"Programmable Encoder Accessories", // what shows below the image thumbnail
                    "imgTitle": "Programmable Encoder Accessories "
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // pencoders
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/mwheels.jpg",
                    "imgCaption":"Measuring Wheels", // what shows below the image thumbnail
                    "imgTitle": "Measuring Wheels: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // mwheels
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/repeaters.jpg",
                    "imgCaption":"Repeater, Converter & Splitter", // what shows below the image thumbnail
                    "imgTitle": "Repeater, Converter & Splitter: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // repeaters
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/trutrac.jpg",
                    "imgCaption":"Tru-Trac Accessories", // what shows below the image thumbnail
                    "imgTitle": "Tru-Trac Accessories:"
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // trutac

          ],
        ]
      }, // Wizard, topic, 1,5
      {
        "topicID": 1,
        "nodeOrder": 6,
        "nodeDisplayName": "Login In Your Monthly Wizard Contribution",
        "nodeContentId": '696_1_6', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "multipleChoice",
        "conversationBlurbs":["Select all the categories that you would like to help"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "referrer",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Referred Friends & Co-Workers To TESY",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "studentadvocacy",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Shared my TESU Experience with Prospective Students",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "employee",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Shared my Experience with TESU Employees",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "career",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Assisted in Alumni Career Development",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "exhibited",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Showed my TESU Gear at Social Outings",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "exhibited",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Connected with TESU on Social Media",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]
        ]
      }, // Wizard, topic, 6
      {
        "topicID": 1,
        "nodeOrder": 7,
        "nodeDisplayName": "Enter Your Profile",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_7', // tracking id, topic id, node id
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["And please provide your contacts so that we can enroll you as an Ambassador"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 1, 7
      {
        "topicID": 1,
        "nodeOrder": 8,
        "nodeDisplayName": "Tell Us How TESU Changed Your Life",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_8', // tracking id, topic id, node id
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["One final thing - become an inspiration for the TESU community", "Tell us how TESU changed yur life", "We are looking for simple inspiring stories to communicate to others the value of education at TEST"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "openEnded",
              "name": "impact",
              "label": "Brief Write Up on How TESU Chaged your Life",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 1, 8
      {
        "topicID": 1,
        "nodeOrder": 9,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_1_9', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Thank you so much for providing us your information", "We need help from successful alumni such as you ", "Please help out with a small donation", "Every little bit counts"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 1, 9
      {
        "topicID": 1,
        "nodeOrder": 10,
        "nodeDisplayName": "Thanks!",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_1_10',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 10
      {
        "topicID": 1,
        "nodeOrder": 11,
        "nodeDisplayName": "Refer Someone You Know",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_11', // tracking id, topic id, node id
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["We need more folks like you to take advantage of education at TESU", "If you know someone who can benefit from TESU - drop us a name", "Our admissions staff will follow up"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 11 INVESTOR
      {
        "topicID": 1,
        "nodeOrder": 12,
        "nodeDisplayName": "Referees Interest",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_12', // tracking id, topic id, node id
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Tell us briefly what academic track this person would be interested in", "This way we can provide relevant information when we contact this person"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 12 INVESTOR
      {
        "topicID": 1,
        "nodeOrder": 13,
        "nodeDisplayName": "Tell Us About Your Self",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_1_13',
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["And if you don't mind", "Please share your business profile", "It helps us stay in touch with our alumni"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "phone",
              "label": "Phone Number",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
          [{
            "da_ddf": {
              "value": "",
              "valueType": "", // this is of no value; used for css
              "name": "streetAddress1", // name - value pair used to dyanmically create a AJAX object
              "label": "Street Address 1",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "label": "City",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "state",
              "label": "State",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "label": "Zip Code",
              "required": true
            },
            "da_meob": {

              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 13
      {
        "topicID": 1,
        "nodeOrder": 14,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_1_14', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Thank you so much for providing us your information", "We need help from successful alumni such as you ", "Please help out with a small donation", "Every little bit counts"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. I Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 1, 14
      {
        "topicID": 1,
        "nodeOrder": 15,
        "nodeDisplayName": "Thanks!",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_1_15',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 15
      {
        "topicID": 1,
        "nodeOrder": 16,
        "nodeDisplayName": "Show Your Pride In Being TESU Graduate",
        "nodeTemplateCategory": "imageGallery",
        "nodeContentId": '696_1_16', // tracking id, topic id, node id
        "answerRequired": true,
        "imageType": "thumbnail",
        "conversationBlurbs":["One way to help us, is to show pride in your TESU membership", "We have some good stuff available at our online store", "Here is some stuff I found for you", "I will take you to the online store if you would like"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/pencoders.jpg",
                    "imgCaption":"Programmable Encoder Accessories", // what shows below the image thumbnail
                    "imgTitle": "Programmable Encoder Accessories "
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // pencoders
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/mwheels.jpg",
                    "imgCaption":"Measuring Wheels", // what shows below the image thumbnail
                    "imgTitle": "Measuring Wheels: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // mwheels
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/repeaters.jpg",
                    "imgCaption":"Repeater, Converter & Splitter", // what shows below the image thumbnail
                    "imgTitle": "Repeater, Converter & Splitter: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // repeaters
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/trutrac.jpg",
                    "imgCaption":"Tru-Trac Accessories", // what shows below the image thumbnail
                    "imgTitle": "Tru-Trac Accessories:"
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // trutac




          ],
        ]
      }, // 16image gallery - topic 1, 14 Illumnitor
      {
        "topicID": 1,
        "nodeOrder": 17,
        "nodeDisplayName": "Online Store",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_1_17',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 17
      {
        "topicID": 1,
        "nodeOrder": 18,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '696_1_18', // tracking id, topic id, node id
        "answerRequired": true,
        "filterContent": false,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // topic 1, 18
      {
        "topicID": 1,
        "nodeOrder": 19,
        "nodeDisplayName": "Select Donation Amount",
        "nodeContentId": '696_1_19',
        "nodeTemplateCategory": "paymentProcessor",
        "answerRequired": true,
        "conversationBlurbs":["Please select the amount you would like to contribute", "Every dollar that we get from supporters like you helps"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "paymentAmount": [
              {
                "paymentType": [
                  {
                    "oneTime": true,
                    "displayLabel": "One Time Payment"
                  },
                  {
                    "recurringMonthly": true,
                    "displayLabel": "Sustaining Member"
                  },
                  {
                    "inInstallment": false,
                    "displayLabel": ""
                  }
                ]
              },
              {
                "paymentChoices": [
                  "$100",
                  "$200",
                  "other"
                ]
              }
            ]
          },
          {
            "paymentMethod": [

              {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://give.tesu.edu/give/124557/#!/donation/checkout"
              }
            ]
          },
          {
            "billingInformation":
              [
                {
                  "fieldName": "name",
                  "required": true,
                  "label": "Name",

                },
                {
                  "fieldName": "street",
                  "required": true,
                  "label": "Street",

                },
                {
                  "fieldName": "city",
                  "required": true,
                  "label": "City",

                },
                {
                  "fieldName": "zipCode",
                  "required": true,
                  "label": "Zip Code",

                },
                {
                  "fieldName": "country",
                  "required": true,
                  "label": "United States"
                }
              ]

          },
          {
            "paymentProcessing":
              [
                {
                  "fieldName": "creditCardNumber",
                  "required": true,
                  "label": "Card Number",

                },
                {
                  "fieldName": "expiration",
                  "required": true,
                  "label": "MM/YY",

                },
                {
                  "fieldName": "cvc",
                  "required": true,
                  "label": "CVC",

                },

              ]
          } // the cc fields are created by Suhag's webhook code - as constants - part of his spec

        ]
      }, // Entrepreneur- - topic 1, 19 the keys HAVE to match the payment processor subcategory
      {
        "topicID": 1,
        "nodeOrder": 20,
        "nodeDisplayName": "Thanks!",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_1_20',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // topic 1, 20

      {
        "topicID": 2,
        "nodeOrder": 0,
        "nodeDisplayName": "What Type of Job You Would Like to Share",
        "nodeContentId": '696_2_0', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["The single biggest proof of TESU's value are the career opportunities it leads to", "Help out, by sharing a job at your company or some other place","Roles suitable for TESU graduates"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "fulltime",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Full Time Job",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "parttime",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Part Time Job",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "intern",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Internship",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, // Share a Job - 2, 0
      {
        "topicID": 2,
        "nodeOrder": 1,
        "nodeDisplayName": "Contact of Person Handling Applicants",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_2_1', // tracking id, topic id, node id
        "answerRequired": true,
        "conversationBlurbs":["Please provide contact information on who should the inquiries be directed to "],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 2,1
      {
        "topicID": 2,
        "nodeOrder": 2,
        "nodeDisplayName": "Job Overview",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_2_2', // tracking id, topic id, node id
        "answerRequired": true,
        "conversationBlurbs":["And some particulars about the job opportunity you would like to share  "],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 2,2
      {
        "topicID": 2,
        "nodeOrder": 3,
        "nodeDisplayName": "Job Description",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_2_3', // tracking id, topic id, node id
        "answerRequired": true,
        "conversationBlurbs":["Please provide a brief description of the opportunity ", "Just enough for our TESU students and alumni to understand nature of the job"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 2,3
      {
        "topicID": 2,
        "nodeOrder": 4,
        "nodeDisplayName": "Your Contact Information",
        "nodeTemplateCategory": "contactDataCollector",
        "nodeContentId": '696_2_4', // tracking id, topic id, node id
        "answerRequired": true,
        "conversationBlurbs":["And if you don't mind, please leave your information too "],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 2,4
      {
        "topicID": 2,
        "nodeOrder": 5,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_2_5', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Thank you so much!", "On additional thing", "We need help from successful alumni such as you ", "A small donation can go a long way"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 2,5
      {
        "topicID": 2,
        "nodeOrder": 6,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '696_2_6', // tracking id, topic id, node id
        "answerRequired": true,
        "filterContent": false,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // 2,6
      {
        "topicID": 2,
        "nodeOrder": 7,
        "nodeDisplayName": "Select Donation Amount",
        "nodeContentId": '696_2_7',
        "nodeTemplateCategory": "paymentProcessor",
        "answerRequired": true,
        "conversationBlurbs":["Please select the amount you would like to contribute", "Every dollar that we get from supporters like you helps"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "paymentAmount": [
              {
                "paymentType": [
                  {
                    "oneTime": true,
                    "displayLabel": "One Time Payment"
                  },
                  {
                    "recurringMonthly": true,
                    "displayLabel": "Sustaining Member"
                  },
                  {
                    "inInstallment": false,
                    "displayLabel": ""
                  }
                ]
              },
              {
                "paymentChoices": [
                  "$100",
                  "$200",
                  "other"
                ]
              }
            ]
          },
          {
            "paymentMethod": [

              {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://give.tesu.edu/give/124557/#!/donation/checkout"
              }
            ]
          },
          {
            "billingInformation":
              [
                {
                  "fieldName": "name",
                  "required": true,
                  "label": "Name",

                },
                {
                  "fieldName": "street",
                  "required": true,
                  "label": "Street",

                },
                {
                  "fieldName": "city",
                  "required": true,
                  "label": "City",

                },
                {
                  "fieldName": "zipCode",
                  "required": true,
                  "label": "Zip Code",

                },
                {
                  "fieldName": "country",
                  "required": true,
                  "label": "United States"
                }
              ]

          },
          {
            "paymentProcessing":
              [
                {
                  "fieldName": "creditCardNumber",
                  "required": true,
                  "label": "Card Number",

                },
                {
                  "fieldName": "expiration",
                  "required": true,
                  "label": "MM/YY",

                },
                {
                  "fieldName": "cvc",
                  "required": true,
                  "label": "CVC",

                },

              ]
          } // the cc fields are created by Suhag's webhook code - as constants - part of his spec

        ]
      }, //2,7
      {
        "topicID": 2,
        "nodeOrder": 8,
        "nodeDisplayName": "Thanks!",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_2_8',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // 2,8

      {
        "topicID": 3,
        "nodeOrder": 0,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '696_3_0', // tracking id, topic id, node id
        "answerRequired": true,
        "filterContent": false,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // Help Alamater topic 3, 0
      {
          "topicID": 3,
          "nodeOrder": 1,
          "nodeDisplayName": "Select Donation Amount",
          "nodeContentId": '696_3_1',
          "nodeTemplateCategory": "paymentProcessor",
          "answerRequired": true,
          "conversationBlurbs":["Please select the amount you would like to contribute", "Every dollar that we get from supporters like you helps"],
          "audioAnnotation": [],
          "nodeInputContent": [
          {
            "paymentAmount": [
              {
                "paymentType": [
                  {
                    "oneTime": true,
                    "displayLabel": "One Time Payment"
                  },
                  {
                    "recurringMonthly": true,
                    "displayLabel": "Sustaining Member"
                  },
                  {
                    "inInstallment": false,
                    "displayLabel": ""
                  }
                ]
              },
              {
                "paymentChoices": [
                  "$100",
                  "$200",
                  "other"
                ]
              }
            ]
          },
          {
              "paymentMethod": [

                {
                  "digitalWallets": [
                    "PayPal",
                    "Visa Checkout",
                    "Master Card Checkout"
                  ],
                  "websitePaymentPage":"https://give.tesu.edu/give/124557/#!/donation/checkout"
                }
              ]
            },
          {
            "billingInformation":
              [
                {
                  "fieldName": "name",
                  "required": true,
                  "label": "Name",

                },
                {
                  "fieldName": "street",
                  "required": true,
                  "label": "Street",

                },
            {
              "fieldName": "city",
              "required": true,
              "label": "City",

            },
            {
              "fieldName": "zipCode",
              "required": true,
              "label": "Zip Code",

            },
            {
              "fieldName": "country",
              "required": true,
              "label": "United States"
            }
          ]

          },
          {
              "paymentProcessing":
                [
                  {
                    "fieldName": "creditCardNumber",
                    "required": true,
                    "label": "Card Number",

                  },
                  {
                    "fieldName": "expiration",
                    "required": true,
                    "label": "MM/YY",

                  },
                  {
                    "fieldName": "cvc",
                    "required": true,
                    "label": "CVC",

                  },

                ]
           } // the cc fields are created by Suhag's webhook code - as constants - part of his spec

        ]
        }, // Done - Help Your Alma Mater - topic 3, 1 the keys HAVE to match the payment processor subcategory
      {
        "topicID": 3,
        "nodeOrder": 2,
        "nodeDisplayName": "Thanks",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_3_2',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // topic 3, 2

      {
        "topicID": 4,
        "nodeOrder": 0,
        "nodeDisplayName": "Marvin D. Swede Johnson CASE Award Recipient",
        "nodeTemplateCategory": "audioVideoMessage",
        "nodeContentId": '696_4_0', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["This year the CASE Award was given to Robin Walton", "Here is a short video about that and why she deserves the rcognition"],
        "audioAnnotation": [],
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc
          [
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/pencoders.jpg",
                    "imgCaption":"Programmable Encoder Accessories", // what shows below the image thumbnail
                    "imgTitle": "Programmable Encoder Accessories "
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // pencoders
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/mwheels.jpg",
                    "imgCaption":"Measuring Wheels", // what shows below the image thumbnail
                    "imgTitle": "Measuring Wheels: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // mwheels
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/repeaters.jpg",
                    "imgCaption":"Repeater, Converter & Splitter", // what shows below the image thumbnail
                    "imgTitle": "Repeater, Converter & Splitter: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // repeaters
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/trutrac.jpg",
                    "imgCaption":"Tru-Trac Accessories", // what shows below the image thumbnail
                    "imgTitle": "Tru-Trac Accessories:"
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // trutac




          ],
        ]
      }, //topic 4,0
      {
        "topicID": 4,
        "nodeOrder": 1,
        "nodeDisplayName": "Thomas C. Streckewald Memorial Golf Classic - 2019",
        "nodeTemplateCategory": "imageGallery",
        "nodeContentId": '696_4_1', // tracking id, topic id, node id
        "imageType": "fulleScreen",
        "conversationBlurbs":["As you know every year we organize the Streckland Memorial Golf Classic", "Its a lot of fun and a good cause", "See if you can spot anyone you know here"],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 4,1
      {
        "topicID": 4,
        "nodeOrder": 2,
        "nodeDisplayName": "Check Out Our Alumni Ambassadors",
        "nodeTemplateCategory": "flippableContentCard",
        "nodeContentId": '696_4_2', // tracking id, topic id, node id
        "conversationBlurbs":["Not sure if you have met the latest crop of Alumni Ambassadors", "Check them out - perhaps you may know someone", "You know - you can always become an ambassador too"],
        "audioAnnotation": [],
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc
          [
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/pencoders.jpg",
                    "imgCaption":"Programmable Encoder Accessories", // what shows below the image thumbnail
                    "imgTitle": "Programmable Encoder Accessories "
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // pencoders
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/mwheels.jpg",
                    "imgCaption":"Measuring Wheels", // what shows below the image thumbnail
                    "imgTitle": "Measuring Wheels: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // mwheels
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/repeaters.jpg",
                    "imgCaption":"Repeater, Converter & Splitter", // what shows below the image thumbnail
                    "imgTitle": "Repeater, Converter & Splitter: ",
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // repeaters
            [
              {
                'da_ddf': {
                  "image": {
                    "imgSrc": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/lead/epc/images/trutrac.jpg",
                    "imgCaption":"Tru-Trac Accessories", // what shows below the image thumbnail
                    "imgTitle": "Tru-Trac Accessories:"
                  }
                }
              },
              {
                'da_meob': {
                  "da_obseg": [
                    {
                      "da_ob_skey": "all",
                      "da_ob_sval": ["all"]
                    },
                  ],
                  "da_disob": true
                }
              }
            ], // trutac




          ],
        ]
      }, //topic 4,2
      {
        "topicID": 4,
        "nodeOrder": 3,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_4_3', // tracking id, topic id, node id
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["One quick thing, if you don't mind", "We need help from alumni such as you ", "Please help out with a small donation", "It will go a long way"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 4,3
      {
        "topicID": 4,
        "nodeOrder": 4,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '696_4_4', // tracking id, topic id, node id
        "answerRequired": true,
        "filterContent": false,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // 4,4
      {
        "topicID": 4,
        "nodeOrder": 5,
        "nodeDisplayName": "Select Donation Amount",
        "nodeContentId": '696_4_5',
        "nodeTemplateCategory": "paymentProcessor",
        "answerRequired": true,
        "conversationBlurbs":["Please select the amount you would like to contribute", "Every dollar that we get from supporters like you helps"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "paymentAmount": [
              {
                "paymentType": [
                  {
                    "oneTime": true,
                    "displayLabel": "One Time Payment"
                  },
                  {
                    "recurringMonthly": true,
                    "displayLabel": "Sustaining Member"
                  },
                  {
                    "inInstallment": false,
                    "displayLabel": ""
                  }
                ]
              },
              {
                "paymentChoices": [
                  "$100",
                  "$200",
                  "other"
                ]
              }
            ]
          },
          {
            "paymentMethod": [

              {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://give.tesu.edu/give/124557/#!/donation/checkout"
              }
            ]
          },
          {
            "billingInformation":
              [
                {
                  "fieldName": "name",
                  "required": true,
                  "label": "Name",

                },
                {
                  "fieldName": "street",
                  "required": true,
                  "label": "Street",

                },
                {
                  "fieldName": "city",
                  "required": true,
                  "label": "City",

                },
                {
                  "fieldName": "zipCode",
                  "required": true,
                  "label": "Zip Code",

                },
                {
                  "fieldName": "country",
                  "required": true,
                  "label": "United States"
                }
              ]

          },
          {
            "paymentProcessing":
              [
                {
                  "fieldName": "creditCardNumber",
                  "required": true,
                  "label": "Card Number",

                },
                {
                  "fieldName": "expiration",
                  "required": true,
                  "label": "MM/YY",

                },
                {
                  "fieldName": "cvc",
                  "required": true,
                  "label": "CVC",

                },

              ]
          } // the cc fields are created by Suhag's webhook code - as constants - part of his spec

        ]
      }, // 4,5
      {
        "topicID": 4,
        "nodeOrder": 6,
        "nodeDisplayName": "Thanks",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '696_4_6',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // topic 4, 6


  ];

    storyNodesOutputContent = [

      {
          "topicID": 0,
          "nodeOrder": 0,
          "nodeDisplayName": "Please Select Topic of Interest",
          "nodeContentId": '696_0_0',
          "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "Become a TESU Genius",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "visitorinterest",
              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/innovation.png",

              "sublabel": "Join the Genius Program & Help Promote TESU Mission",

              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Share a Job",
              "valueType": "",
              "name": "visitorinterest",

              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/network.png",
              "sublabel": "Share a Job & Tap into Skilled TESU Community",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Help Your Alma Mater",
              "valueType": "",
              "name": "visitorinterest",

              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/fundraising.png",
              "sublabel": "Donate to Help Your Alma Mater Flourish & Grow",
              "cta": "Check Out!",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Recent TESU Update",
              "valueType": "",
              "name": "visitorinterest",
              "imgSource" : "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/overview.png",
              "sublabel": "Check Out Recent Fun Events & College Developments",
              "cta": "Browse",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
        },

      {
        "topicID": 1,
        "nodeOrder": 0,
        "nodeDisplayName": "Select a Genius Category",
        "nodeContentId": '696_1_0', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "inventor",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be An Inventor",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "entrepreneur",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be an Entrepreneur",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "wizard",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be a Wizard",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "investor",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be an Investor",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "illuminator",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Be an Illuminator",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]
        ]
      }, // Become a Genius - topic 1, 0 the keys HAVE to match the payment processor subcategory
      {
        "topicID": 1,
        "nodeOrder": 1,
        "nodeDisplayName": "Share your Business Profile with TESU Community",
        "nodeContentId": '696_1_1', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "fieldType": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "label": "Email Address",
              "fieldType": "email",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "fieldType": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "fieldType": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "http://",
              "valueType": "",
              "name": "linkedin",
              "fieldType": "linkedin",
              "label": "LinkedIn Profile Handle",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 1
      {
        "topicID": 1,
        "nodeOrder": 2,
        "nodeDisplayName": "Share your Business Accomplishments",
        "nodeContentId": '696_1_2', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "fieldType": "textBox",
              "name": "highlights",
              "label": "Please enter a few highlights of your career",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 2
      {
        "topicID": 1,
        "nodeOrder": 3,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_1_3', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 1, 3
      {
        "topicID": 1,
        "nodeOrder": 4,
        "nodeDisplayName": "Thanks!",
        "nodeContentId": '696_1_4',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 4
      {
        "topicID": 1,
        "nodeOrder": 5,
        "nodeDisplayName": "Here is What You Can Get",
        "nodeContentId": '696_1_5', // tracking id, topic id, node id
        "nodeOutputContent": [

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-1.jpg",
                "imgCaption": "After Completing 3 months",
                "imgTitle": "A TESU Branded First Aid Kit"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-2.jpg",
                "imgCaption": "After Completing 6 months",
                "imgTitle": "A Leather Notebook and Pen"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-3.jpg",
                "imgCaption": "After Completing 9 months",
                "imgTitle": "A TESU Branded Travel Mug"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-4.jpg",
                "imgCaption": "After Completing 12 months",
                "imgTitle": "An Alumni T-Shirt"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-5.jpg",
                "imgCaption": "After Completing 18 months",
                "imgTitle": "A TESU Engraved Pen"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-6.jpg",
                "imgCaption": "After Completing 24 months",
                "imgTitle": "Gift Certificate TESU online TESU Store"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

        ]
      }, // Wizard, topic, 1,5
      {
        "topicID": 1,
        "nodeOrder": 6,
        "nodeDisplayName": "Select How You Would Like To Help",
        "nodeContentId": '696_1_6', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "referrer",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Referred Friends & Co-Workers To TESY",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "studentadvocacy",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Shared my TESU Experience with Prospective Students",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "employee",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Shared my Experience with TESU Employees",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "career",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Assisted in Alumni Career Development",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "exhibited",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Showed my TESU Gear at Social Outings",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "exhibited",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Connected with TESU on Social Media",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]
        ]
      }, // Wizard, topic, 1 6
      {
        "topicID": 1,
        "nodeOrder": 7,
        "nodeDisplayName": "Enroll to Become an Ambassador",
        "nodeContentId": '696_1_7', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "fieldType:": "personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "fieldType:": "email",
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "phone", // name = value pair
              "fieldType:": "phone",
              "label": "Phone",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "fieldType:": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "fieldType:": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 1, 7
      {
        "topicID": 1,
        "nodeOrder": 8,
        "nodeDisplayName": "Tell Us How TESU Changed Your Life",
        "nodeContentId": '696_1_8', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "highlights",
              "fieldType": "textBox",
              "label": "Tell Us How TESU Changed or Impacted Your Life",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }]
        ]
      }, //topic 1, 8
      {
        "topicID": 1,
        "nodeOrder": 9,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_1_9', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 1, 9
      {
        "topicID": 1,
        "nodeOrder": 10,
        "nodeDisplayName": "Thanks!",
        "nodeContentId": '696_1_10',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 10
      {
        "topicID": 1,
        "nodeOrder": 11,
        "nodeDisplayName": "Refer Someone You Know",
        "nodeContentId": '696_1_11', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "fieldType":"personName",
              "label": "Person Name",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "phone",
              "fieldType":"phone",
              "label": "Phone Number",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "preFill",
              "name": "streetAddress1",
              "fieldType":"streetAddress1",
              "label": "Street Address 1",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "fieldType":"city",
              "label": "City",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "", "valueType": "", "fieldType":"state", "name": "state", "label": "State", "required": true},
            "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "fieldType":"zipCode",
              "label": "Zip Code",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }]
        ]

      }, //topic 1, 11 INVESTOR
      {
        "topicID": 1,
        "nodeOrder": 12,
        "nodeDisplayName": "Referees Interest",
        "nodeContentId": '696_1_12', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "academics",
              "fieldType":"textBox",
              "label": "Enter Person's Academic Interests or Other Relevant Information",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
        ]

      }, //topic 1, 12 INVESTOR
      {
        "topicID": 1,
        "nodeOrder": 13,
        "nodeDisplayName": "Tell Us About Your Self",
        "nodeContentId": '696_1_13', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "fieldType":"personName",
              "label": "Your Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "fieldType":"email",
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "fieldType":"company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "fieldType":"title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "http://",
              "valueType": "",
              "name": "linkedin",
              "fieldType":"linkedin",
              "label": "LinkedIn Profile Handle",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 1, 13
      {
        "topicID": 1,
        "nodeOrder": 14,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_1_14', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 1, 14
      {
        "topicID": 1,
        "nodeOrder": 15,
        "nodeDisplayName": "Thanks!",
        "nodeContentId": '696_1_15',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 15
      {
        "topicID": 1,
        "nodeOrder": 16,
        "nodeDisplayName": "Show Your Pride In Being TESU Graduate",
        "nodeContentId": '696_1_16', // tracking id, topic id, node id
        "nodeOutputContent": [

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop1.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop2.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop3.png",
                "imgCaption": "District Perfect Tri 3/4-Sleeve Raglan- Alumni",
                "imgTitle": "Regular price - $16.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop4.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop5.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop6.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop7.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop8.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop9.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop10.png",
                "imgCaption": "District Women’s Perfect Tri Tee- Alumni",
                "imgTitle": "Mona - $14.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop11.png",
                "imgCaption": "Summit",
                "imgTitle": "Regular price - $11.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop12.png",
                "imgCaption": "Summit",
                "imgTitle": "Regular price - $18.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop13.png",
                "imgCaption": "Mountain Lodge Blanket-Alumni",
                "imgTitle": "Regular price - $48.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/shop14.png",
                "imgCaption": "Mountain Lodge Blanket-Alumni",
                "imgTitle": "Regular price - $48.99"

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],


        ]
      }, // 16 image gallery - topic 1, 14 Illumnitor
      {
        "topicID": 1,
        "nodeOrder": 17,
        "nodeDisplayName": "Online Store",
        "nodeContentId": '696_1_17',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your participation will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, //topic 1, 17
      {
        "topicID": 1,
        "nodeOrder": 18,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeContentId": '696_1_18', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // topic 1, 18
      {
        "topicID": 1,
        "nodeOrder": 19,
        "nodeDisplayName": "Payment Amount",
        "nodeContentId": '696_1_19',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "paymentChoices":[
                {
                  "value": "100",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "100",
                },
                {
                  "value": "200",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "200",
                },
                {
                  "value": "300",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "300",
                },
                {
                  "value": "400",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "400",
                },
                {
                  "value": "other",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "Other",
                }],
              "otherFormField": {
                "value": "", // preFilled data
                "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
                "name": "paymentAmount",
                "label": "Enter Amount",
                "required": false
              },
              "paymentType": [
                {"name": 'paymentType', "value":'donateOnce', "label": "Donate Once", "valueType": "preFill", "required": true}, // default is colored
                {"name": 'paymentType', "value":'donateMonthly', "label": "Donate Monthly", "valueType": "", "required": true}
              ], // if the askType is empty, I guess it is assumed to be recuurring
              "includePayCCProcessingCharge": {
                "value": true,
                "valueType": "",
                "name": "payProcessingCharge",
                "label": "'I would like to cover the processing fee so 100% of my donation goes to Thomas Edison",
                "required": false
              }
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
        ]
      }, // 1, 19 - true should not be the string true; payProcessingCharge
      {
        "topicID": 1,
        "nodeOrder": 6961,
        "nodeDisplayName": "Payment Method",
        "nodeContentId": '696_1_19_1',
        "nodeOutputContent": [
          [
            {
              "da_ddf": {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://give.tesu.edu/"
              },
              "da_meob": {"da_disob": true, "da_obseg": []}
            }
          ]
        ]
      }, // 1, 6961 node orders for these nodes are pseudo 6961, 6962, etc. (trackingid derived)
      {
        "topicID": 1,
        "nodeOrder": 6962,
        "nodeDisplayName": "Billing Information",
        "nodeContentId": '696_1_19_2',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "firstName",
              "fieldType":"firstName",
              "label": "First Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "lastName",
              "fieldType":"lastName",
              "label": "Last Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "preFill",
              "name": "streetAddress1",
              "fieldType":"streetAddress1",
              "label": "Street Address 1",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "fieldType":"city",
              "label": "City",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "", "valueType": "", "fieldType":"state", "name": "state", "label": "State", "required": true},
            "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "fieldType":"zipCode",
              "label": "Zip Code",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }]]
      }, // 1, 6962, node content id for pseudo nodes is 534_0_0 + _1 or _2 or _3
      {
        "topicID": 1,
        "nodeOrder": 6963,
        "nodeDisplayName": "PaymentProcessing",
        "nodeContentId": '696_1_19_3',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "", // preFilled data if any
              "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
              "name": "cardNumber",
              "label": "Card Number",
              "fieldType":"cardNumber",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "expiration", // name = value pair
              "fieldType": "expiration",
              "label": "MM/YY",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "cvc", // name = value pair
              "fieldType": "cvc",
              "label": "CVC",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],

        ]
      }, // 1, 6962
      {
        "topicID": 1,
        "nodeOrder": 20,
        "nodeDisplayName": "Thanks!",
        "nodeContentId": '696_1_20',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // topic 1, 20

      {
        "topicID": 2,
        "nodeOrder": 0,
        "nodeDisplayName": "What Type of Job You Would Like to Share",
        "nodeContentId": '696_2_0', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "fulltime",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Full Time Job",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "parttime",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Part Time Job",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "intern",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Internship",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
        ]
      }, //Share a Job 2,0
      {
        "topicID": 2,
        "nodeOrder": 1,
        "nodeDisplayName": "Contact of Person Handling Applicants ",
        "nodeContentId": '696_2_1', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "fieldType": "personName",
              "label": "Name of Person",
              "required": true
            },
            "da_meob": {

              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "fieldType": "name",
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "fieldType": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "fieldType": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "phone",
              "fieldType": "phone",
              "label": "Phone",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 2,1
      {
        "topicID": 2,
        "nodeOrder": 2,
        "nodeDisplayName": "Job Overview",
        "nodeContentId": '696_2_2', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "fieldType": "title",
              "label": "Job Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "location", // name = value pair
              "fieldType": "location",
              "label": "Job Location",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "fieldType": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "website",
              "fieldType": "website",
              "label": "Company Website",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "http://",
              "valueType": "",
              "name": "url",
              "fieldType": "url",
              "label": "URL of Job Posting",
              "required": false
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
        ]
      }, //topic 2,2
      {
        "topicID": 2,
        "nodeOrder": 3,
        "nodeDisplayName": "Job Description",
        "nodeContentId": '696_2_3', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "description",
              "fieldType": "textBox",
              "label": "Please Enter Job Description & Other Relevant Information",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],

        ]
      }, //topic 2,3
      {
        "topicID": 2,
        "nodeOrder": 4,
        "nodeDisplayName": "Your Contact Information",
        "nodeContentId": '696_2_4', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "personName",
              "label": "Your Name",
              "fieldType": "personName",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "email", // name = value pair
              "fieldType": "email",
              "label": "Email Address",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "company",
              "fieldType": "company",
              "label": "Company Name",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "title",
              "fieldType": "title",
              "label": "Business Title",
              "required": true
            },
            "da_meob": {
              "precedence": 2, // not used, remove it
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
            }
          }],


        ]
      }, //topic 2, 4
      {
        "topicID": 2,
        "nodeOrder": 5,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_2_5', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 2,5
      {
        "topicID": 2,
        "nodeOrder": 6,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeContentId": '696_2_6', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // 2,6
      {
        "topicID": 2,
        "nodeOrder": 7,
        "nodeDisplayName": "Payment Amount",
        "nodeContentId": '696_2_7',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "paymentChoices":[
                {
                  "value": "100",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "100",
                },
                {
                  "value": "200",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "200",
                },
                {
                  "value": "300",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "300",
                },
                {
                  "value": "400",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "400",
                },
                {
                  "value": "other",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "Other",
                }],
              "otherFormField": {
                "value": "", // preFilled data
                "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
                "name": "paymentAmount",
                "label": "Enter Amount",
                "required": false
              },
              "paymentType": [
                {"name": 'paymentType', "value":'donateOnce', "label": "Donate Once", "valueType": "preFill", "required": true}, // default is colored
                {"name": 'paymentType', "value":'donateMonthly', "label": "Donate Monthly", "valueType": "", "required": true}
              ], // if the askType is empty, I guess it is assumed to be recuurring
              "includePayCCProcessingCharge": {
                "value": true,
                "valueType": "",
                "name": "payProcessingCharge",
                "label": "'I would like to cover the processing fee so 100% of my donation goes to Thomas Edison",
                "required": false
              }
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
        ]
      }, // 2, 7 - true should not be the string true; payProcessingCharge
      {
        "topicID": 2,
        "nodeOrder": 6961,
        "nodeDisplayName": "Payment Method",
        "nodeContentId": '696_2_7_1',
        "nodeOutputContent": [
          [
            {
              "da_ddf": {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://www.tesu.edu/"
              },
              "da_meob": {"da_disob": true, "da_obseg": []}
            }
          ]
        ]
      }, // 2, 6961 node orders for these nodes are pseudo 6961, 6962, etc. (trackingid derived)
      {
        "topicID": 2,
        "nodeOrder": 6962,
        "nodeDisplayName": "Billing Information",
        "nodeContentId": '696_2_7_2',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "firstName",
              "label": "First Name",
              "fieldType": "firstName",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "lastName",
              "fieldType": "lastName",
              "label": "Last Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "preFill",
              "name": "streetAddress1",
              "fieldType": "lstreetAddress1",
              "label": "Street Address 1",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "fieldType": "city",
              "label": "City",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {"value": "", "valueType": "",  "fieldType": "state", "name": "state", "label": "State", "required": true},
            "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "fieldType": "zipcode",
              "label": "Zip Code",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }]]
      }, // 2, 6962, node content id for pseudo nodes is 534_0_0 + _1 or _2 or _3
      {
        "topicID": 2,
        "nodeOrder": 6963,
        "nodeDisplayName": "PaymentProcessing",
        "nodeContentId": '696_2_7_3',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "", // preFilled data if any
              "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
              "name": "cardNumber",
              "fieldType": "cardNumber",
              "label": "Card Number",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "expiration", // name = value pair
              "fieldType": "expiration",
              "label": "MM/YY",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "cvc", // name = value pair
              "fieldType": "cvc",
              "label": "CVC",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],

        ]
      }, // 2, 6962
      {
        "topicID": 2,
        "nodeOrder": 8,
        "nodeDisplayName": "Thanks!",
        "nodeContentId": '696_2_8',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // 2,8

      {
        "topicID": 3,
        "nodeOrder": 0,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeContentId": '696_3_0',
        "conversationBlurbs":["Please select how you would like the funds to be directed"],
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // 3,0, Help Alma Mater
      {
        "topicID": 3,
        "nodeOrder": 1,
        "nodeDisplayName": "Payment Amount",
        "nodeContentId": '696_3_1',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "paymentChoices":[
                {
                  "value": "100",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "100",
                },
                {
                  "value": "200",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "200",
                },
                {
                  "value": "300",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "300",
                },
                {
                  "value": "400",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "400",
                },
                {
                  "value": "other",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "Other",
                }],
              "otherFormField": {
                "value": "", // preFilled data
                "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
                "name": "paymentAmount",
                "label": "Enter Amount",
                "required": false
              },
              "paymentType": [
                {"name": 'paymentType', "value":'donateOnce', "label": "Donate Once", "valueType": "preFill", "required": true}, // default is colored
                {"name": 'paymentType', "value":'donateMonthly', "label": "Donate Monthly", "valueType": "", "required": true}
              ], // if the askType is empty, I guess it is assumed to be recuurring
              "includePayCCProcessingCharge": {
                "value": true,
                "valueType": "",
                "name": "payProcessingCharge",
                "label": "'I would like to cover the processing fee so 100% of my donation goes to Thomas Edison",
                "required": false
              }
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
        ]
      }, // 3, 1 - true should not be the string true; payProcessingCharge
      {
        "topicID": 3,
        "nodeOrder": 6961,
        "nodeDisplayName": "Payment Method",
        "nodeContentId": '696_3_1_1',
        "nodeOutputContent": [
          [
            {
              "da_ddf": {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://www.tesu.edu/"
              },
              "da_meob": {"da_disob": true, "da_obseg": []}
            }
          ]
        ]
      }, // 3, 6961 node orders for these nodes are pseudo 6961, 6962, etc. (trackingid derived)
      {
        "topicID": 3,
        "nodeOrder": 6962,
        "nodeDisplayName": "Billing Information",
        "nodeContentId": '696_3_1_2',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "firstName",
              "label": "First Name",
              "fieldType": "firstName",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "lastName",
              "fieldType": "lastName",
              "label": "Last Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "preFill",
              "name": "streetAddress1",
              "fieldType": "lstreetAddress1",
              "label": "Street Address 1",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "fieldType": "city",
              "label": "City",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {"value": "", "valueType": "",  "fieldType": "state", "name": "state", "label": "State", "required": true},
            "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "fieldType": "zipcode",
              "label": "Zip Code",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }]]
      }, // 3, 6962, node content id for pseudo nodes is 534_0_0 + _1 or _2 or _3
      {
        "topicID": 3,
        "nodeOrder": 6963,
        "nodeDisplayName": "PaymentProcessing",
        "nodeContentId": '696_3_1_3',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "", // preFilled data if any
              "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
              "name": "cardNumber",
              "fieldType": "cardNumber",
              "label": "Card Number",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "expiration", // name = value pair
              "fieldType": "expiration",
              "label": "MM/YY",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "cvc", // name = value pair
              "fieldType": "cvc",
              "label": "CVC",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],

        ]
      }, // 3, 6962
      {
        "topicID": 3,
        "nodeOrder": 2,
        "nodeDisplayName": "Thanks",
        "nodeContentId": '696_3_2',
        "nodeOutputContent": [[{"da_ddf": {"text": ["Thank you so much!!"]}}, {
          "da_meob": {
            "da_obseg": [{
              "da_ob_skey": "all",
              "da_ob_sval": "all"
            }], "da_disob": true
          }
        }], [{"da_ddf": {"text": ["For helping out"]}}, {
          "da_meob": {
            "da_obseg": [{
              "da_ob_skey": "all",
              "da_ob_sval": "all"
            }], "da_disob": true
          }
        }], [{"da_ddf": {"text": ["Good Bye Now!"]}}, {
          "da_meob": {
            "da_obseg": [{
              "da_ob_skey": "all",
              "da_ob_sval": "all"
            }], "da_disob": true
          }
        }]]
      }, // 3, 2

      {
        "topicID": 4,
        "nodeOrder": 0,
        "nodeDisplayName": "Robin Walton | Marvin D. Swede Johnson CASE Award Recipient",
        "nodeContentId": '696_4_0', // tracking id, topic id, node id
        "nodeOutputContent": [

          [
            {
              'da_ddf': {
                  mediaType:"video",
                  mediaTitle: "Marvin D. Swede Johnson CASE Award",
                  mediaSubtitle: "Profile of This Year's Awardee",
                  mediaLeftHandSideFooter1: "Robin Walton",
                  mediaLeftHandSideFooter2: "VP, Community & Government Affairs at TESU",
                  mediaSource: "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/caseaward.mp4",
                  mediaCallToAction: "Play Now",

              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": ["all"]
                }],
                "da_disob": true
              }
            }
          ],

        ]
      }, //topic 4,0, image gallery
      {
        "topicID": 4,
        "nodeOrder": 1,
        "nodeDisplayName": "Spot Someone You Know at Our Annual Golf Outing",
        "nodeContentId": '696_4_1', // tracking id, topic id, node id
        "nodeOutputContent": [

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-1.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-2.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-3.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-4.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-5.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-6.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-7.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-8.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-9.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-10.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-11.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-12.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],

          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-13.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-14.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-15.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],
          [
            {
              "da_ddf": {

                "imgSrc": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/golf-16.jpg",
                "imgCaption": "",
                "imgTitle": ""

              }
            },
            {
              "da_meob": {
                "da_obseg": [{"da_ob_skey": "all", "da_ob_sval": ["all"]}],
                "da_disob": true
              }
            }
          ],



        ]
      }, //topic 4,1,image gallery
      {
        "topicID": 4,
        "nodeOrder": 2,
        "nodeDisplayName": "Check Out Our Alumni Ambassadors",
        "nodeContentId": '696_4_2', // tracking id, topic id, node id
        "nodeOutputContent": [

          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-amna-malik.jpg"],
                  "cardBodyTitle": ["Amna Malik"],
                  "cardBodySubtitle": ["BA ’17"],
                  "cardBackBodyContentColumn1": ["I fought to prove myself – to my family, my peers and my culture – the value of education."],

              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-drew-maristch.jpg"],
                  "cardBodyTitle": ["Drew Maristch"],
                  "cardBodySubtitle": ["BSBA ’15"],
                  "cardBackBodyContentColumn1": ["I wish that someone would have opened my eyes sooner to how important a degree really is. There are so many people out there who are just stuck working in dead end or low paying jobs. If I can help just one person take that first step toward a new career earning what they deserve and doing what they love, it is worth it!"],

              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-monica-castano.jpg"],
                  "cardBodyTitle": ["Monica Castaño"],
                  "cardBodySubtitle": ["BSN ’12, MSN ’17"],
                  "cardBackBodyContentColumn1": ["As a leader in my profession, I encourage all nurses to embark on furthering their education and experiencing all that Thomas Edison State University has to offer. The wealth of knowledge I obtained through the Master of Science in Nursing degree program has truly empowered me to continue to further develop my nursing practice and be resourceful to the community that I serve"],

              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-naimah.jpg"],
                  "cardBodyTitle": ["Naimah Boone-Koon"],
                  "cardBodySubtitle": ["BSN ’16"],
                  "cardBackBodyContentColumn1": ["My Thomas Edison State University (TESU) degree opens doors for me."]

              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-percy-blenman.jpg"],
                  "cardBodyTitle": ["Percy Blenman"],
                  "cardBodySubtitle": ["AA ’12, BA ’13"],
                  "cardBackBodyContentColumn1": ["Since 2013, Blenman has been an Alumni Ambassador, referring students to the institution, speaking to prospective students, being an active social media advocate, assisted with University Nursing partnership with VNSNY, as well as remaining an active donor to the institution’s scholarship programs."],

              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-psingh.jpg"],
                  "cardBodyTitle": ["Paul Singh"],
                  "cardBodySubtitle": ["BSBA ’15, MALS ’19"],
                  "cardBackBodyContentColumn1": ["Knowing how education changed his life, he is a strong advocate for TESU"],

              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "card": [{
                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-solando.jpg"],
                  "cardBodyTitle": ["Samuel Olando"],
                  "cardBodySubtitle": ["BSBA ’13"],
                  "cardBackBodyContentColumn1": ["I enjoyed the flexibility the University offered as well as the diverse student body with whom I could engage"],

                }]
              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {

                  "cardFrontImageColumn1": ["https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-percy-blenman.jpg"],
                  "cardBodyTitle": ["Percy Blenman"],
                  "cardBodySubtitle": ["AA ’12, BA ’13"],
                  "cardBackBodyContentColumn1": ["Since 2013, Blenman has been an Alumni Ambassador, referring students to the institution, speaking to prospective students, being an active social media advocate, assisted with University Nursing partnership with VNSNY, as well as remaining an active donor to the institution’s scholarship programs."],


              }
            },
            {
              'da_meob': {
                "da_obseg": [
                  {
                    "da_ob_skey": "all",
                    "da_ob_sval": ["all"]
                  }
                ],
                "da_disob": true
              }
            }
          ]

        ]
      }, //topic 4,2, image gallery
      {
        "topicID": 4,
        "nodeOrder": 3,
        "nodeDisplayName": "Please Help TESU",
        "nodeContentId": '696_4_3', // tracking id, topic id, node id
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "yes",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Sure. Would Like To Help",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "no",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Maybe Later. Not Today",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      }, //topic 4, 3
      {
        "topicID": 4,
        "nodeOrder": 4,
        "nodeDisplayName": "What Would You Like To Support",
        "nodeContentId": '696_4_4',
        "conversationBlurbs":["Please select how you would like the funds to be directed"],
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "TESU Scholarship Fund",
              "valueType": "", // this is css related stuff; ok for now;
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "TESU Scholarship Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Annual Fund",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Annual Fund",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nursing Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nursing Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Military Scholarships",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Military Scholarships",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Nicholas & Marjorie Carnevale Endowment",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Nicholas & Marjorie Carnevale Endowment",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }]

        ]
      }, // 4,4, Help Alma Mater
      {
        "topicID": 4,
        "nodeOrder": 5,
        "nodeDisplayName": "Payment Amount",
        "nodeContentId": '696_4_5',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "paymentChoices":[
                {
                  "value": "100",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "100",
                },
                {
                  "value": "200",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "200",
                },
                {
                  "value": "300",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "300",
                },
                {
                  "value": "400",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "400",
                },
                {
                  "value": "other",
                  "valueType": "",
                  "name": "paymentAmount",
                  "label": "Other",
                }],
              "otherFormField": {
                "value": "", // preFilled data
                "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
                "name": "paymentAmount",
                "label": "Enter Amount",
                "required": false
              },
              "paymentType": [
                {"name": 'paymentType', "value":'donateOnce', "label": "Donate Once", "valueType": "preFill", "required": true}, // default is colored
                {"name": 'paymentType', "value":'donateMonthly', "label": "Donate Monthly", "valueType": "", "required": true}
              ], // if the askType is empty, I guess it is assumed to be recuurring
              "includePayCCProcessingCharge": {
                "value": true,
                "valueType": "",
                "name": "payProcessingCharge",
                "label": "'I would like to cover the processing fee so 100% of my donation goes to Thomas Edison",
                "required": false
              }
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
        ]
      }, // 4, 5 - true should not be the string true; payProcessingCharge
      {
        "topicID": 4,
        "nodeOrder": 6961,
        "nodeDisplayName": "Payment Method",
        "nodeContentId": '696_4_5_1',
        "nodeOutputContent": [
          [
            {
              "da_ddf": {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://www.tesu.edu/"
              },
              "da_meob": {"da_disob": true, "da_obseg": []}
            }
          ]
        ]
      }, // 4, 6961 node orders for these nodes are pseudo 6961, 6962, etc. (trackingid derived)
      {
        "topicID": 4,
        "nodeOrder": 6962,
        "nodeDisplayName": "Billing Information",
        "nodeContentId": '696_4_5_2',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "firstName",
              "label": "First Name",
              "fieldType": "firstName",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "lastName",
              "fieldType": "lastName",
              "label": "Last Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "preFill",
              "name": "streetAddress1",
              "fieldType": "lstreetAddress1",
              "label": "Street Address 1",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "fieldType": "city",
              "label": "City",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {"value": "", "valueType": "",  "fieldType": "state", "name": "state", "label": "State", "required": true},
            "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "fieldType": "zipcode",
              "label": "Zip Code",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }]]
      }, // 4, 6962, node content id for pseudo nodes is 534_0_0 + _1 or _2 or _3
      {
        "topicID": 4,
        "nodeOrder": 6963,
        "nodeDisplayName": "PaymentProcessing",
        "nodeContentId": '696_4_5_3',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "", // preFilled data if any
              "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
              "name": "cardNumber",
              "fieldType": "cardNumber",
              "label": "Card Number",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "expiration", // name = value pair
              "fieldType": "expiration",
              "label": "MM/YY",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "cvc", // name = value pair
              "fieldType": "cvc",
              "label": "CVC",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],

        ]
      }, // 4, 6962
      {
        "topicID": 4,
        "nodeOrder": 6,
        "nodeDisplayName": "Thanks!",
        "nodeContentId": '696_4_6',
        "nodeOutputContent": [[
          {
            'da_ddf': {
              "text": ["Well I am sorry to hear that"]
            }
          },
          {
            'da_meob': {
              "da_obseg": [{
                "da_ob_skey": "all",
                "da_ob_sval": "all"
              }],
              "da_disob": true
            }
          }
        ],
          [
            {
              'da_ddf': {
                "text": ["Thank you so much for helping us out"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Your contribution will make a difference"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ],
          [
            {
              'da_ddf': {
                "text": ["Good Bye Now!"]
              }
            },
            {
              'da_meob': {
                "da_obseg": [{
                  "da_ob_skey": "all",
                  "da_ob_sval": "all"
                }],
                "da_disob": true
              }
            }
          ]]
      }, // 4,6

  ];

    conversionParameters = [
      {
        "metaData": {
          "trid": trackingID
        }
      },
      {
        "returnedData": {
          "includeSmartProbe":false,
          "goal": [
            {
              "dataField": "prospectName",
              "importance": "2"},
            {
              "dataField": "phoneNumber",
              "importance": "3"},
            {
              "dataField": "emailAddress",
              "importance": "1"},
            {
              "dataField": "companyName",
              "importance": "4"},
            {
              "dataField": "businessTitle",
              "importance": "5"}
          ]

        }
      }];

    setupParameters = [
    {
      "metaData": {
        "trid": trackingID
      }
    },
    {
      "returnedData": {
        "traffic": [
          "email",
          "textMsg",
          "direct"
        ],
        "pageType": "website",
        "device": [
          "mobile",
          "desktop"
        ],
        "region": [
          "USA",
          "Canada"
        ],
        "pageTarget": [
          {
            "group": [
              {
                "subGroup": {
                  "urlCategory": "url host",
                  "subGroupLogicOperand": "null",
                  "subGroupMatch": [
                    {
                      "urlCategoryMatchType": "is",
                      "urlCategoryValue": "bs-local.com:63342"
                    }
                  ]
                }
              },
              {
                "subGroup": {
                  "urlCategory": "url path",
                  "subGroupLogicOperand": "and",
                  "subGroupMatch": [
                    {
                      "urlCategoryMatchType": "is",
                      "urlCategoryValue": "/chso/clientPageWithSnippet.html"
                    }
                  ]

                }
              }
            ]
          }
        ],

      }
    }];

    activateParameters = [
        {
          "metaData": {
            "trid": trackingID
          }
        },
        {
          "returnedData": {
            "trafficAllocatedToBot": "0.5",
            "automationLevel": "full",
            "schedule":
              {
                "timeZone": "EST",
                "scheduledHours": [
                  {
                    "day": "Monday",
                    "from": "0",
                    "to": "23"
                  },
                  {
                    "day": "Tuesday",
                    "from": "0",
                    "to": "23"
                  },
                  {
                    "day": "Wednesday",
                    "from": "0",
                    "to": "23"
                  },
                  {
                    "day": "Thursday",
                    "from": "0",
                    "to": "23"
                  },
                  {
                    "day": "Friday",
                    "from": "0",
                    "to": "23"
                  },
                  {
                    "day": "Saturday",
                    "from": "0",
                    "to": "23"
                  },
                  {
                    "day": "Sunday",
                    "from": "0",
                    "to": "23"
                  }
                ]
              }

          }
        }
      ];


    function postPayload(dataToBeSent, webHookType, trid) { // for now for surveys, answers and contact information - but can be for other user case


     apiURL = postAPI +'?whtype=' + webHookType + '&trid=' + trid;


      dataToBeSent = JSON.stringify(dataToBeSent); // if the object is not pure JSON the data is not posted
    $.ajax({
      method: 'POST', // only post is valid
      dataType: 'json', // this is what is received;
      //  contentType: "application/x-www-form-urlencoded", // data being sent; this format means a key-value pair
      contentType: "application/json", // IMPORTANT. DONT use it this will trigger a preflight handshake, with an OPTIONS call; Need Laravel to Handle that
      data: dataToBeSent,

      url: apiURL,
      success: function (response, status, xhr) { // What to do if we succeed
        console.log(response, status);
        try {
          var q = JSON.parse(response);
        } catch (e) {
          var a = JSON.stringify(response);
        }
        console.log(response, status, xhr.statusText);

      },
      error: function (jqXHR, response, textStatus, errorThrown) { // What to do if we fail
        console.log(JSON.stringify(jqXHR));
        console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
      }
    });
  }

    function newCampaignMeta(a) {

      var response = postPayload(campaignMetaNew, 'start', trackingID);

    }

    function updateCampaignMeta(a) {

      var response = postPayload(campaignMetaUpdate, 'start', trackingID);

    }

    function publishPaymentProcessorInput(a) {
      var payload = [];
      metaData = {"trid":trackingID};
      payload[0] = {metaData};

      returnedData = paymentProcessorNodeInputContent;
      payload[1] = {returnedData};
      var response = postPayload(payload, 'nodeInputContent', trackingID);

    }

    function publishTopicsMeta(a) {

    var response = postPayload(storyTopicsMeta, 'topicsMeta', trackingID);

  }

    function publishPaymentProcessorMeta(a) {

      var response = postPayload(paymentProcessorMeta, 'nodesMeta', trackingID);

  }

    function publishNodesMeta(a) {

      var response = postPayload(storyNodesMeta, 'nodesMeta', trackingID);

    }

    function publishNodeInputContent(a) {

       var payload = [];

       metaData = {"trid":trackingID};
       payload[0] = {metaData};

      for (var n = 0; n < storyNodesInputContent.length; n++) {

          returnedData = storyNodesInputContent[n];
          payload[1] = {returnedData};
          var response = postPayload(payload, 'nodeInputContent', trackingID);
        }

    }

    function publishNodeOutputContent(a) {

    var payload = [];

    metaData = {"trid":trackingID};
    payload[0] = {metaData};

    for (var n = 0; n < storyNodesOutputContent.length; n++) {

      returnedData = storyNodesOutputContent[n];
      payload[1] = {returnedData};
      var response = postPayload(payload, 'nodeOutputContent', trackingID);
    }

  }

    function publishCampaignConversionGoals(a) {

    var response = postPayload(conversionParameters, 'cgoal', trackingID);

  }

    function publishSetupParameters(a) {

    var response = postPayload(setupParameters, 'setup', trackingID);

    }

    function publishActivateParameters(a) {

    var response = postPayload(activateParameters, 'activate', trackingID);

  }

    function newCampaignAll(a) {

      var response = newCampaignMeta(a);
      var response = publishTopicsMeta(a);
      var response = publishNodesMeta(a);
      var response = publishNodeInputContent(a);
      var response = publishNodeOutputContent(a);
      var response = publishSetupParameters(a);
      var response = publishActivateParameters(a);
      var response = publishCampaignConversionGoals(a);


  }

    function updateCampaignAll(a) {

      var response = updateCampaignMeta(a);
      var response = publishTopicsMeta(a);
      var response = publishNodesMeta(a);
      var response = publishNodeOutputContent(a);
      var response = publishSetupParameters(a);
      var response = publishActivateParameters(a);
      var response = publishCampaignConversionGoals(a);

  }

    function endPublishing(a) {

      var response = postPayload(null, 'end', trackingID);

    }



});



