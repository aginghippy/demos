

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

    $("#endPublishing").click(endPublishing);

    var
    trackingID= 801,
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
            "ncnt": "8",
            "cnam": "TESU Curriculum Search",
            "cimod": "PR-1",
            "webproperty": "bs-local.com",
            "searchType": "curriculum",
            "campaignType": "simple",
            "debugMode": true
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
              "ncnt": "8",
              "campaignName": "TESU Student Enrollment",
              "conversationInitiationMode": "PR-1",
              "webproperty": "bs-local.com",
              "searchType": "curriculum",
              "campaignType": "simple",
              "debugMode": true,
              "audioAnnotation":false,
              "visitorGreeting": "Hey there! Would you like to know how TESU can help advance your career?",
              "introduceStory":["Hi there", "I am here to tell you a little about TESU", "Save you time searching and clicking for information on the site", "Please select a topic that interest you"]
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
            "topicName": "Search the Curriculum",
            "topicDescription":"Explore Degree Programs and Certifications in 100+ Study Areas",
            "topicImage":"https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/innovation.png"
          }, // topic 0
          {
            "topicID": 1,
            "topicName": "Financial Assistance",
            "topicDescription":"Learn About Financial Aid & Scholarships for TESU students",
            "topicImage":"https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/network.png"
          }, // topic 1
          {
            "topicID": 2,
            "topicName": "Advance Your Career",
            "topicDescription":"See How We can Advance Your Career and Boost Job Prospects",
            "topicImage":"https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/fundraising.png"
          }, // topic 2
          {
            "topicID": 3,
            "topicName": "About Thomas Edison",
            "topicDescription":"Get a Quick Overview and Learn Why We Are Different",
            "topicImage":"https://chalakh-bot-js.s3.us-east-2.amazonaws.com/images/overview.png"
          } // topic 3

        ]
      }
    ],

    storyNodesMeta = [
      {
        "metaData": {
          "trid": 801
        }
      },
      {
        "returnedData": [
       


          // topic 0 - curriculumn search

          {
            "topicID": 0,
            "nodeOrder": 0,
            "nodeDisplayName": "What's Your Area of Interest",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "business",
                "skipTo": 1
              },
              {
                "resp": "technology",
                "skipTo": 2
              },
              {
                "resp": "policy",
                "skipTo": 3
              },
              {
                "resp": "health",
                "skipTo": 4
              },
              {
                "resp": "education",
                "skipTo": 5
              },
              {
                "resp": "arts",
                "skipTo": 6
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 0
          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Select Concentration in Business & Management",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "generalm",
                "skipTo": 12
              },
              {
                "resp": "accounting",
                "skipTo": 14
              },
              {
                "resp": "computeri",
                "skipTo": 13
              },
              {
                "resp": "aataa",
                "skipTo": 15
              },
              {
                "resp": "entrepreneurship",
                "skipTo": 18
              },
              {
                "resp": "finance",
                "skipTo": 14
              },
              {
                "resp": "healthcarem",
                "skipTo": 14
              },
              {
                "resp": "humanresource",
                "skipTo": 14
              },
              {
                "resp": "international",
                "skipTo": 18
              },
              {
                "resp": "marketing",
                "skipTo": 13
              },
              {
                "resp": "operationsm",
                "skipTo": 13
              },
              {
                "resp": "organizationall",
                "skipTo": 13
              },
              {
                "resp": "organizationalm",
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 1
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "Select Area of Interest in Science & Technology",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "biomedical",
                "skipTo": 7
              },
              {
                "resp": "nuclearscience",
                "skipTo": 8
              },
              {
                "resp": "informationt",
                "skipTo": 9
              },
              {
                "resp": "cybersecurity",
                "skipTo": 16
              },
              {
                "resp": "aviations",
                "skipTo": 10
              },

            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 2
          {
            "topicID": 0,
            "nodeOrder": 3,
            "nodeDisplayName": "Select Public Policy & Administration Concentration",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "publicservice",
                "skipTo": 16
              },
              {
                "resp": "humanservices",
                "skipTo": 17
              },
              {
                "resp": "homelandsecurity",
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 3
          {
            "topicID": 0,
            "nodeOrder": 4,
            "nodeDisplayName": "Select Health Services Study Area",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "nurseedu",
                "skipTo": 18
              },
              {
                "resp": "nurseinfor",
                "skipTo": 18
              },
              {
                "resp": "nurseadmin",
                "skipTo": 18
              },
              {
                "resp": "nursepract",
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 4
          {
            "topicID": 0,
            "nodeOrder": 5,
            "nodeDisplayName": "Select Education Concentration",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 5
          {
            "topicID": 0,
            "nodeOrder": 6,
            "nodeDisplayName": "Concentration in Arts & Sciences",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 6
          {
            "topicID": 0,
            "nodeOrder": 7,
            "nodeDisplayName": "Concentration in Health & Biomedical",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "imaging",
                "skipTo": 17
              },
              {
                "resp": "clinicallaboratory",
                "skipTo": 17
              },
              {
                "resp": "biomedical",
                "skipTo": 17
              },
              {
                "resp": "dental",
                "skipTo": 18
              },
              {
                "resp": "hst",
                "skipTo": 18
              },
              {
                "resp": "radiation",
                "skipTo": 17
              },
              {
                "resp": "respiratory",
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 7
          {
            "topicID": 0,
            "nodeOrder": 8,
            "nodeDisplayName": "Nuclear Science Study Area",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "nuclearenergy",
                "skipTo": 17
              },
              {
                "resp": "nuclearengineering",
                "skipTo": 17
              },
              {
                "resp": "nuclearmedicine",
                "skipTo": 18
              },
              {
                "resp": "radiationprotection",
                "skipTo": 18
              },
              {
                "resp": "radiationprotectionh",
                "skipTo": 18
              },
              {
                "resp": "energysystems",
                "skipTo": 18
              },
              {
                "resp": "nuclearenergy",
                "skipTo": 15
              },
              {
                "resp": "electronicsengineering",
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 8
          {
            "topicID": 0,
            "nodeOrder": 9,
            "nodeDisplayName": "Information Technology Study Concentration",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "it",
                "skipTo": 12
              },
              {
                "resp": "healthtechnology",
                "skipTo": 18
              },
              {
                "resp": "electrical",
                "skipTo": 18
              },
              {
                "resp": "electronics",
                "skipTo": 18
              },
              {
                "resp": "computerscience",
                "skipTo": 17
              },
              {
                "resp": "datascience",
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 9
          {
            "topicID": 0,
            "nodeOrder": 10,
            "nodeDisplayName": "Aviation Science Concentration",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "traffic",
                "skipTo": 17
              },
              {
                "resp": "flight",
                "skipTo": 17
              },
              {
                "resp": "amaintenance",
                "skipTo": 17
              },
              {
                "resp": "amanagement",
                "skipTo": 15
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 10
          {
            "topicID": 0,
            "nodeOrder": 11,
            "nodeDisplayName": "Select Type of Degree You Want to Pursue",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 11
          {
            "topicID": 0,
            "nodeOrder": 12,
            "nodeDisplayName": "Select Program You Want to Pursue",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 12
          {
            "topicID": 0,
            "nodeOrder": 13,
            "nodeDisplayName": "Select Certificate or Undergraduate Program",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, //13
          {
            "topicID": 0,
            "nodeOrder": 14,
            "nodeDisplayName": "Select Graduate or Undergraduate Or Certificate Program",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, //14
          {
            "topicID": 0,
            "nodeOrder": 15,
            "nodeDisplayName": "Select Graduate or Undergraduate Program",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, //15
          {
            "topicID": 0,
            "nodeOrder": 16,
            "nodeDisplayName": "Select Graduate or Certificate Program",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, //16
          {
            "topicID": 0,
            "nodeOrder": 17,
            "nodeDisplayName": "Select Associate or Undergraduate Program",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 18
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, //17
          // searchTile, searchContent - true
          {
            "topicID": 0,
            "nodeOrder": 18,
            "nodeDisplayName": "Programs Learning Objective",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          }, // 18
          {
            "topicID": 0,
            "nodeOrder": 19,
            "nodeDisplayName": "Key Information & Dates",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          }, // 19
          {
            "topicID": 0,
            "nodeOrder": 20,
            "nodeDisplayName": "Faculty Leadership Profile",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          }, // 20
          {
            "topicID": 0,
            "nodeOrder": 21,
            "nodeDisplayName": "Curriculum Overview - General Requirements",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          }, // 21
          {
            "topicID": 0,
            "nodeOrder": 22,
            "nodeDisplayName": "Curriculum Overview - Area of Study",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          }, // 22
          {
            "topicID": 0,
            "nodeOrder": 23,
            "nodeDisplayName": "Core Course Details",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          }, // 23
          {
            "topicID": 0,
            "nodeOrder": 24,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, // 23 go back to start

          {
            "topicID": 1,
            "nodeOrder": 0,
            "nodeDisplayName": "How Much Will A Degree Cost",
            "nodeTemplateCategory": "textParagraphs",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,



          }, //topic 1,0
          {
            "topicID": 1,
            "nodeOrder": 1,
            "nodeDisplayName": "Cost of Undergraduate Degree - In State",
            "nodeTemplateCategory": "bulletedText",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 1,1
          {
            "topicID": 1,
            "nodeOrder": 2,
            "nodeDisplayName": "Cost of Undergraduate Degree - Out of State",
            "nodeTemplateCategory": "bulletedText",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 1,1
          {
            "topicID": 1,
            "nodeOrder": 3,
            "nodeDisplayName": "FAQs on Scholarships at TESU",
            "nodeTemplateCategory": "textParagraphs",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,



          }, //topic 1,2
          {
            "topicID": 1,
            "nodeOrder": 4,
            "nodeDisplayName": "Opportunities to Get Financial Aid",
            "nodeTemplateCategory": "downloadableDocuments",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 1,3
          {
            "topicID": 1,
            "nodeOrder": 5,
            "nodeDisplayName": "Tool to Estimate Cost of Attending",
            "nodeTemplateCategory": "textParagraphs",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 1,4
          {
            "topicID": 1,
            "nodeOrder": 6,
            "nodeDisplayName": "Go Back To Start",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // 1, 5 go back to start

          {
            "topicID": 2,
            "nodeOrder": 0,
            "nodeDisplayName": "Hear From Our Graduates",
            "nodeTemplateCategory": "audioVideoMessage",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 2, 0
          {
            "topicID": 2,
            "nodeOrder": 1,
            "nodeDisplayName": "Endorsements from Our Graduates",
            "nodeTemplateCategory": "multimediaEndorsements",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 2, 1
          {
            "topicID": 2,
            "nodeOrder": 2,
            "nodeDisplayName": "Satisfaction with TESU",
            "nodeTemplateCategory": "bulletedText",
            "nodeContentId": '801_2_2', // tracking id, topic id, node id
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 2, 2
          {
            "topicID": 2,
            "nodeOrder": 3,
            "nodeDisplayName": "Corporate Partners",
            "nodeTemplateCategory": "imageGallery",
            "galleryTitle": "xxxx",
            "gallerySubtitle": "yyyyyy",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 2, 3
          {
            "topicID": 2,
            "nodeOrder": 4,
            "nodeDisplayName": "Tap Into the Alumni Network",
            "nodeTemplateCategory": "audioVideoMessage",
            "nodeContentId": '801_2_4', // tracking id, topic id, node id
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 2, 4
          {
            "topicID": 2,
            "nodeOrder": 5,
            "nodeDisplayName": "Go Back To Start",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // 2, 5 go back to start

          {
            "topicID": 3,
            "nodeOrder": 0,
            "nodeDisplayName": "About Thomas Edison University",
            "nodeTemplateCategory": "bulletedText",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 3,0
          {
            "topicID": 3,
            "nodeOrder": 1,
            "nodeDisplayName": "What Makes Thomas Edison Different",
            "nodeTemplateCategory": "bulletedText",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,



          }, //topic 3,1
          {
            "topicID": 3,
            "nodeOrder": 2,
            "nodeDisplayName": " What Makes Thomas Edison Different",
            "nodeTemplateCategory": "audioVideoMessage",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 3, 2
          {
            "topicID": 3,
            "nodeOrder": 3,
            "nodeDisplayName": "What Can You Expect as a Student",
            "nodeTemplateCategory": "audioVideoMessage",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 3, 3
          {
            "topicID": 3,
            "nodeOrder": 4,
            "nodeDisplayName": "Where are Some of Our Grads Today",
            "nodeTemplateCategory": "audioVideoMessage",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,


          }, //topic 3, 4
          {
            "topicID": 3,
            "nodeOrder": 5,
            "nodeDisplayName": "Select FAQ Topic of Interest",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "back",
                "skipTo": 6
              },
              {
                "resp": "admissions",
                "skipTo": 7
              },
              {
                "resp": "credit",
                "skipTo": 8
              },
              {
                "resp": "aid",
                "skipTo": 9
              },
              {
                "resp": "residency",
                "skipTo": 10
              },
              {
                "resp": "programs",
                "skipTo": 11
              },
              {
                "resp": "enroll",
                "skipTo": 12
              },
              {
                "resp": "study",
                "skipTo": 13
              }
            ],
            "searchQuery": false,
            "searchContent": false,
            "dataPrefilled": false,

          }, // topic 3, 5
          {
            "topicID": 3,
            "nodeOrder": 6,
            "nodeDisplayName": "FAQ: About Going Back to College",
            "nodeTemplateCategory": "textParagraphs",
            "nodeContentId": '801_3_6',
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 6
          {
            "topicID": 3,
            "nodeOrder": 7,
            "nodeDisplayName": "FAQ: About Admissions and Application",
            "nodeTemplateCategory": "textParagraphs",
            "nodeContentId": '801_3_7',
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 7
          {
            "topicID": 3,
            "nodeOrder": 8,
            "nodeDisplayName": "FAQ: About Academic Credit",
            "nodeTemplateCategory": "textParagraphs",
            "nodeContentId": '801_3_8',
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 8
          {
            "topicID": 3,
            "nodeOrder": 9,
            "nodeDisplayName": "FAQ: About Cost and Financial Aid",
            "nodeTemplateCategory": "textParagraphs",
            "nodeContentId": '801_3_9',
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 9
          {
            "topicID": 3,
            "nodeOrder": 10,
            "nodeDisplayName": "FAQ: About Credit Hour Residency",
            "nodeTemplateCategory": "textParagraphs",
            "nodeContentId": '801_3_10',
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 10
          {
            "topicID": 3,
            "nodeOrder": 11,
            "nodeDisplayName": "FAQ: About Degree Programs",
            "nodeTemplateCategory": "textParagraphs",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 11
          {
            "topicID": 3,
            "nodeOrder": 12,
            "nodeDisplayName": "FAQ: About Enrollment",
            "nodeTemplateCategory": "textParagraphs",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 12
          {
            "topicID": 3,
            "nodeOrder": 13,
            "nodeDisplayName": "FAQ: About Studying at TESU",
            "nodeTemplateCategory": "textParagraphs",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // topic 3, 13
          {
            "topicID": 3,
            "nodeOrder": 14,
            "nodeDisplayName": "Go Back To Start",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,

          }, // 3, 14 go back to start

        ]
      }
    ],
      
    storyNodesInputContent = [

      {
        "topicID": 0,
        "nodeOrder": 0,
        "nodeDisplayName": "Your Area of Interest",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_0',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["With just few clicks you can now search and explore the different programs TESU offers", "Please select your primary area of interest"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Business & Management",
            "returnValue": "business"
          },
          { "displayName": "Science & Technology",
            "returnValue": "technology"
          },
          { "displayName": "Public Policy & Administration",
            "returnValue": "policy"
          },
          { "displayName": "Nursing",
            "returnValue": "health"
          },
          { "displayName": "Education",
            "returnValue": "education"
          },
          { "displayName": "Arts & Science",
            "returnValue": "arts"
          },
        ]
      }, // 0, 0 level 1, singleChoice

      {
        "topicID": 0,
        "nodeOrder": 1,
        "nodeDisplayName": "Select Concentration in Business & Management",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_1',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["We offer a number of different concentrations in Business Management", "Now select one that interests you"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "General Management",
            "returnValue": "generalm"
          },
          { "displayName": "Accounting Programs",
            "returnValue": "accounting"
          },
          { "displayName": "Computer Information Systems",
            "returnValue": "computeri"
          },
          { "displayName": "Data Analytics",
            "returnValue": "aataa"
          },
          { "displayName": "Entrepreneurship",
            "returnValue": "entrepreneurship"
          },

          { "displayName": "Finance",
            "returnValue": "finance"
          },
          { "displayName": "Healthcare Management",
            "returnValue": "healthcarem"
          },
          { "displayName": "Human Resource Management",
            "returnValue": "humanresource"
          },
          { "displayName": "International Business",
            "returnValue": "international"
          },
          { "displayName": "Marketing",
            "returnValue": "marketing"
          },

          { "displayName": "Operations Management",
            "returnValue": "operationsm"
          },
          { "displayName": "Organizational Leadership",
            "returnValue": "organizationall"
          },
          { "displayName": "Organizational Management",
            "returnValue": "organizationalm"
          },
          { "displayName": "Project Management",
            "returnValue": "project"
          }


        ]
      }, // 0, 1 level 2, singleChoice
      {
          "topicID": 0,
          "nodeOrder": 2,
          "nodeDisplayName": "Select Area of Interest in Science & Technology",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '801_0_2',
          "answerRequired": true,
          "questionType": "singleChoice",
          "searchQuery": true,
          "conversationBlurbs":["We offer a rich and diverse program in Science and Technology", "Select an area of interest to you"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Health & Biomedical",
              "returnValue": "biomedical"
            },
            { "displayName": "Nuclear Science",
              "returnValue": "nuclearscience"
            },
            { "displayName": "Information Technology",
              "returnValue": "informationt"
            },
            { "displayName": "Cybersecurity",
              "returnValue": "cybersecurity"
            },
            { "displayName": "Aviation Science",
              "returnValue": "aviations"
            },

          ]
        }, // 0, 2 level 3 - feed equipment subcategories
      {
          "topicID": 0,
          "nodeOrder": 3,
          "nodeDisplayName": "Select Public Policy & Administration Concentration",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '801_0_3',
          "answerRequired": true,
          "searchQuery": true,
          "questionType": "singleChoice",
          "conversationBlurbs":["Our public policy programs equip you for the dealing with contemporary issues in this area", "Select an area of study that you want to focus on"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Public Service Leadership",
              "returnValue": "publicservice"
            },
            { "displayName": "Human Services",
              "returnValue": "humanservices"
            },
            { "displayName": "Homeland Security and Emergency Management",
              "returnValue": "homelandsecurity"
            }


          ]
        }, // 0, 3
      {
          "topicID": 0,
          "nodeOrder": 4,
          "nodeDisplayName": "Select Health Services Study Area",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '801_0_4',
          "answerRequired": true,
          "searchQuery": true,
          "questionType": "singleChoice",
          "conversationBlurbs":["If you are interested in a career in nursing we offer 4 different tracks", "Choose one"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Nurse Educator",
              "returnValue": "nurseedu"
            },
            { "displayName": "Nursing Informatics",
              "returnValue": "nurseinfor"
            },
            { "displayName": "Nursing Administration",
              "returnValue": "nurseadmin"
            },
            { "displayName": "Nursing Practice",
              "returnValue": "nursepract"
            }


          ]
        }, // 0, 4
      {
          "topicID": 0,
          "nodeOrder": 5,
          "nodeDisplayName": "Select Education Concentration",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '801_0_5',
          "answerRequired": true,
          "searchQuery": true,
          "questionType": "singleChoice",
          "conversationBlurbs":["Online education and more, please make a selection"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Education Technology & Online Learning",
              "returnValue": "educationtechnology"
            },
            { "displayName": "Educational Leadership",
              "returnValue": "educationall"
            },
          ]
        }, // 0, 5
      {
          "topicID": 0,
          "nodeOrder": 6,
          "nodeDisplayName": "Concentration in Arts & Sciences",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '801_0_6',
          "answerRequired": true,
          "searchQuery": true,
          "questionType": "singleChoice",
          "conversationBlurbs":["From biology to envionmentl science to photography, we offer it all", "Choose a topic you want to explore"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Art",
              "returnValue": "art"
            },
            { "displayName": "Biology",
              "returnValue": "biology"
            },
            { "displayName": "Communications",
              "returnValue": "communications"
            },
            { "displayName": "Computer Science",
              "returnValue": "computers"
            },
            { "displayName": "Criminal Justice",
              "returnValue": "criminal"
            },
            { "displayName": "English",
              "returnValue": "english"
            },
            { "displayName": "Environmental Studies",
              "returnValue": "environmental"
            },

            { "displayName": "Foreign Language",
              "returnValue": "foreign"
            },
            { "displayName": "History",
              "returnValue": "history"
            },
            { "displayName": "International Studies",
              "returnValue": "international"
            },
            { "displayName": "Labor Studies",
              "returnValue": "labor"
            },

            { "displayName": "Liberal Studies",
              "returnValue": "liberal"
            },
            { "displayName": "Mathematics",
              "returnValue": "mathematics"
            },
            { "displayName": "Music",
              "returnValue": "music"
            },
            { "displayName": "Philosophy",
              "returnValue": "philosophy"
            },

            { "displayName": "Photography",
              "returnValue": "photography"
            },
            { "displayName": "Political Science",
              "returnValue": "political"
            },
            { "displayName": "Psychology",
              "returnValue": "psychology"
            },
            { "displayName": "Religion",
              "returnValue": "religion"
            },

            { "displayName": "Sociology",
              "returnValue": "sociology"
            },
            { "displayName": "Theater Arts",
              "returnValue": "theater"
            }

          ]
        }, // 0, 6
      {
        "topicID": 0,
        "nodeOrder": 7,
        "nodeDisplayName": "Concentration in Health & Biomedical",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_7',
        "answerRequired": true,
        "searchQuery": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Prepare youself for a career in Biomedical Sciences", "Choose a category that interest"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Medical Imaging",
            "returnValue": "imaging"
          },
          { "displayName": "Clinical Laboratory Science",
            "returnValue": "clinicallaboratory"
          },
          { "displayName": "Biomedical Electronics",
            "returnValue": "biomedical"
          },
          { "displayName": "Dental Hygiene",
            "returnValue": "dental"
          },
          { "displayName": "Health Services Technology",
            "returnValue": "hst"
          },

          { "displayName": "Radiation Therapy",
            "returnValue": "radiation"
          },
          { "displayName": "Respiratory Care",
            "returnValue": "respiratory"
          }


        ]
      }, // // 0, 7 level 2, singleChoice
      {
        "topicID": 0,
        "nodeOrder": 8,
        "nodeDisplayName": "Nuclear Science Study Area",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_8',
        "answerRequired": true,
        "searchQuery": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Nuclear technology and more", "Choose an area you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Nuclear Energy Engineering Technology",
            "returnValue": "nuclearenergy"
          },
          { "displayName": "Nuclear Engineering Technology",
            "returnValue": "nuclearengineering"
          },
          { "displayName": "Nuclear Medicine Technology",
            "returnValue": "nuclearmedicine"
          },
          { "displayName": "Radiation Protection",
            "returnValue": "radiationprotection"
          },
          { "displayName": "Radiation Protection, Health Physics",
            "returnValue": "radiationprotectionh"
          },

          { "displayName": "Energy Systems Technology",
            "returnValue": "energysystems"
          },
          { "displayName": "Nuclear Energy Technology Management",
            "returnValue": "nuclearenergy"
          },
          { "displayName": "Electronics Engineering Technology",
            "returnValue": "electronicsengineering"
          }


        ]
      }, // // 0, 8 level 3 - feed ingredient subcategories
      {
        "topicID": 0,
        "nodeOrder": 9,
        "nodeDisplayName": "Information Technology Study Concentration",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_9',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Prepare yourself for the world of information technology", "Select a study area"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Information Technology",
            "returnValue": "it"
          },
          { "displayName": "Health Services Technology",
            "returnValue": "healthtechnology"
          },
          { "displayName": "Electrical Technology",
            "returnValue": "electrical"
          },
          { "displayName": "Electronics Systems Engineering Technology",
            "returnValue": "electronics"
          },
          { "displayName": "Computer Science",
            "returnValue": "computerscience"
          },

          { "displayName": "Data Science & Analytics",
            "returnValue": "datascience"
          }


        ]
      }, // 0, 9
      {
        "topicID": 0,
        "nodeOrder": 10,
        "nodeDisplayName": "Aviation Science Concentration",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_10',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Pick an area that interest you"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Air Traffic Control",
            "returnValue": "traffic"
          },
          { "displayName": "Aviation Flight Technology",
            "returnValue": "flight"
          },
          { "displayName": "Aviation Maintenance Technology",
            "returnValue": "amaintenance"
          },
          { "displayName": "Aviation Management",
            "returnValue": "amanagement"
          }

        ]
      }, // 0, 10
      {
        "topicID": 0,
        "nodeOrder": 11,
        "nodeDisplayName": "Select Type of Degree You Want to Pursue",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_11',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Graduate & Post Graduate",
            "returnValue": "graduate"
          },
          { "displayName": "Undergraduate",
            "returnValue": "ug"
          },
          { "displayName": "Associate",
            "returnValue": "associate"
          },
          { "displayName": "Certificate",
            "returnValue": "certificate"
          },
        ]
      }, // 0, 11, g, ug, assoc, cert
      {
        "topicID": 0,
        "nodeOrder": 12,
        "nodeDisplayName": "Select Program You Want to Pursue",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_12',
        "answerRequired": true,
        "searchQuery": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Graduate & Post Graduate",
            "returnValue": "graduate"
          },
          { "displayName": "Undergraduate",
            "returnValue": "ug"
          },
          { "displayName": "Associate",
            "returnValue": "associate"
          },
        ]
      }, // 0, 12, g ug, assoc
      {
        "topicID": 0,
        "nodeOrder": 13,
        "nodeDisplayName": "Select Certificate or Undergraduate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_13',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Undergraduate",
            "returnValue": "ug"
          },
          { "displayName": "Certificate",
            "returnValue": "certificate"
          },
        ]
      }, // 0, 13, ug, certificate
      {
        "topicID": 0,
        "nodeOrder": 14,
        "nodeDisplayName": "Select Graduate or Undergraduate Or Certificate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_14',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Graduate & Post Graduate",
            "returnValue": "graduate"
          },
          { "displayName": "Undergraduate",
            "returnValue": "ug"
          },
          { "displayName": "Certificate",
            "returnValue": "certificate"
          },

        ]
      }, // 0, 14, g, ug, cert
      {
        "topicID": 0,
        "nodeOrder": 15,
        "nodeDisplayName": "Select Graduate or Undergraduate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_15',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Graduate & Post Graduate",
            "returnValue": "graduate"
          },
          { "displayName": "Undergraduate",
            "returnValue": "ug"
          }
        ]
      }, // 0, 15, g ug,
      {
        "topicID": 0,
        "nodeOrder": 16,
        "nodeDisplayName": "Select Graduate or Certificate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_16',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Graduate & Post Graduate",
            "returnValue": "graduate"
          },
          { "displayName": "Certificate",
            "returnValue": "certificate"
          },
        ]
      }, // 0, 16, g, certificate
      {
        "topicID": 0,
        "nodeOrder": 17,
        "nodeDisplayName": "Select Associate or Undergraduate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_17',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeInputContent": [


          { "displayName": "Undergraduate",
            "returnValue": "ug"
          },
          { "displayName": "Associate",
            "returnValue": "associate"
          },

        ]
      }, // 0, 17, assoc, ug
      {
        "topicID": 0,
        "nodeOrder": 18,
        "nodeDisplayName": "Course Learning Objective",
        "nodeTemplateCategory":  "searchTile",
        "nodeContentId": '801_0_18',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeInputContent": [

        ]
      }, // 0, 18
      {
          "topicID": 0,
          "nodeOrder": 19,
          "nodeDisplayName": "Key Information & Dates",
          "nodeTemplateCategory":  "searchTile",
          "nodeContentId": '801_0_19',
          "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
          "audioAnnotation": [],
          "nodeInputContent": [

          ]
        }, // 0, 19
      {
          "topicID": 0,
          "nodeOrder": 20,
          "nodeDisplayName": "Faculty Leadership Profile",
          "nodeTemplateCategory":  "searchTile",
          "nodeContentId": '801_0_20',
          "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
          "audioAnnotation": [],
          "nodeInputContent": [

          ]
        }, // 0, 20
      {
        "topicID": 0,
        "nodeOrder": 21,
        "nodeDisplayName": "Curriculum Overview - General Requirements",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_21',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeInputContent": [

        ]
      }, // 0, 21
      {
        "topicID": 0,
        "nodeOrder": 22,
        "nodeDisplayName": "Curriculum Overview - Area of Study",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_21',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeInputContent": [

        ]
      }, // 0, 22
      {
        "topicID": 0,
        "nodeOrder": 23,
        "nodeDisplayName": "Core Course Details",
        "nodeTemplateCategory":  "searchTile",
        "nodeContentId": '801_0_22',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeInputContent": [

        ]
      }, // 0, 23
      {
        "topicID": 0,
        "nodeOrder": 24,
        "nodeDisplayName": "Go Back To Start",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '801_0_23',
        "terminationMode": 'goBackToStart',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "exitMessage": [""],
          }
        ]
      }, // 0, 24 go back to start

      {
        "topicID": 1,
        "nodeOrder": 0,
        "nodeDisplayName": "How Much Will A Degree Cost",
        "nodeTemplateCategory": "textParagraphs",
        "addGroupHeaders":true,
        "nodeContentId": '801_1_0', // tracking id, topic id, node id
        "conversationBlurbs":["The cost of education at TESU depends on various factors", "We have a few tools that can help you estimate he cost"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "The cost of a degree at Thomas Edison State University depends on a number of variables, including:",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : ["Amount of credits a student brings to their degree program",
              "Previously earned credits from other regionally accredited institutions",
              "Number of credits a student must earn to complete their degree program",
              "Credit-earning methods they use to complete a degree",
              "Students is a resident of New Jersey or out of state",
              "How many credits you might be able to complete in a year"]
          },

        ],

      }, //topic 1,0
      {
        "topicID": 1,
        "nodeOrder": 1,
        "nodeDisplayName": "Cost of Undergraduate Degree - In State",
        "nodeTemplateCategory": "bulletedText",
        "addGroupHeaders":true,
        "nodeContentId": '801_1_1', // tracking id, topic id, node id
        "conversationBlurbs":["If you are in New Jersey you can benefit from our in-state low rates", "Also we have a flat rate program if you take 12 credits or more"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "bulletHeader": "",
            "bulletStrings": [
              ["Credits per Year: 3", "Per Credit Tuition: $1,197", "Discount: None"],
              ["Credits per Year: 6", "Per Credit Tuition: $2,394", "Discount: None"],
              ["Credits per Year: 9", "Per Credit Tuition: $3,591", "Discount: None"],
              ["Credits per Year: 12", "Per Credit Tuition: $4,788", "Flat Rate: $3,963"],
              ["Credits per Year: 15", "Per Credit Tuition: $5,985", "Flat Rate: $3,963"],
              ["Credits per Year: 18", "Per Credit Tuition: $7,192", "Flat Rate: $3,963"],

            ]
          },



        ],

      }, //topic 1,1
      {
        "topicID": 1,
        "nodeOrder": 2,
        "nodeDisplayName": "Cost of Undergraduate Degree - Out of State",
        "nodeTemplateCategory": "bulletedText",
        "addGroupHeaders":true,
        "nodeContentId": '801_1_2', // tracking id, topic id, node id
        "conversationBlurbs":["Out of state students can benefit from our flat rate for more than 12 credits", "It can give you savings of more than 30%"],
        "audioAnnotation": [],
        "nodeInputContent": [

          {
            "bulletHeader": "",
            "bulletStrings": [
              ["Credits per Year: 3", "Per Credit Tuition: $1,527", "Discount: None"],
              ["Credits per Year: 6", "Per Credit Tuition: $3,054", "Discount: None"],
              ["Credits per Year: 9", "Per Credit Tuition: $4,581", "Discount: None"],
              ["Credits per Year: 12", "Per Credit Tuition: $6,108", "Flat Rate: $4,928"],
              ["Credits per Year: 15", "Per Credit Tuition: $7,635", "Flat Rate: $4,928"],
              ["Credits per Year: 18", "Per Credit Tuition: $9,162", "Flat Rate: $4,928"],

            ]
          }


        ],

      }, //topic 1,2
      {
        "topicID": 1,
        "nodeOrder": 3,
        "nodeDisplayName": "FAQs on Scholarships at TESU",
        "nodeTemplateCategory": "textParagraphs",
        "addGroupHeaders":false,
        "nodeContentId": '801_1_3', // tracking id, topic id, node id
        "conversationBlurbs":["Our students also can get scholarships that can further help lower the cost"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "When are Scholarships Offered Next in Winter 2020",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Only for Nursing students in the Accelerated 2nd Degree BSN Program.",
            "paragraphBullets" : ["Application Period: January 15 – 31, 2020", "Selection Period: February 15 – 28, 2020",
              "Notification and Recipient Acceptance Period: March 1 – 15, 2020", "Disbursement Period: Funds are available for use within 2 weeks of accepting the scholarship award"]
          },
          {
            "parargraphTitle": "When are Scholarships Offered Next in Summer 2020",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : ["Application Period: May 1 – May 31, 2020", "Selection Period: June 1 – June 30, 2020",
              "Notification and Recipient Acceptance Period: July 1 – July 15, 2020", "Disbursement Period: Funds are available for use within 2 weeks of accepting the scholarship award"]
          },
          {
            "parargraphTitle": "What Scholarships Are Offered",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Thomas Edison State University offers a number of scholarships to assist students in meeting their financial commitments. A complete list is on https://www.tesu.edu/tuition/scholarship-eligibility-criteria",
            "paragraphBullets" : ["American Federation of Teachers (AFT) Local 4277 Scholarship", "Bristol-Myers Squibb Community Grant Program Scholarship",
              "Curtiss-Wright Corporation Scholarship", "W. Cary Edwards Foundation Nursing Scholarship",
              "Thomas Eklund Endowed Scholarship", "The Excellence in Nursing Scholarship Fund", "Susan O. Friedman Endowed Scholarship"]
          },
          {
            "parargraphTitle": "How to Apply for a Scholarship",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : ["The University utilizes an online scholarship management system. When an award period opens, all eligible students for that period are emailed a link to the scholarship system and the link is posted on this webpage. Students will create an account in the scholarship system and complete an application questionnaire which will automatically apply them to all scholarships for which they are eligible. Any required documentation is submitted via the scholarship system at time of application."]
          },
          {
            "parargraphTitle": "How are eligibility and award criteria",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "To be eligible and considered for an award, scholarship applicants must:",
            "paragraphBullets" : ["Have been admitted to the University in an active degree or certificate program", "Be an active student in Applicant or Enrolled status",
              "No student conduct violations",  "Meet all eligibility criteria described on the respective scholarship's webpage",
              "Submit a completed Thomas Edison State University Scholarship Application during the application period",
              "Have a minimum Thomas Edison State University GPA of 3.0,"]
          }
        ]

      }, //topic 1,3
      {
        "topicID": 1,
        "nodeOrder": 4,
        "nodeDisplayName": "Opportunities to Get Financial Aid",
        "nodeTemplateCategory": "downloadableDocuments",
        "addGroupHeaders":true,
        "nodeContentId": '801_1_4', // tracking id, topic id, node id
        "conversationBlurbs":["Finally there are numerous financial aid programs that can help you lower cost"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "documentTitle": "Financial Aid Handbook",
            "documentSubtitle": "",
            "documentSource": "Thomas Edision State University",
            "descriptionHeader": "Many adult students meeting the demands of work and family find that making the financial commitment to complete their education can be a challenge. The Office of Financial Aid is ready to assist students in securing the resources they need for their education",
            "descriptionBullets" : ["Thomas Edison State University participates in a number of federal and state financial aid programs", "Eligible Thomas Edison State University students may receive Pell Grants or Federal Education Loans, such as the Subsidized Stafford Loan and the Unsubsidized Stafford Loan, for courses offered by the University", "Students may use state aid to meet all or part of their college costs, provided they are taking at least 12 college credits per term"],
            "uploadedDocument": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/docs/aid.pdf"
          }


        ],

      }, //topic 1,4
      {
        "topicID": 1,
        "nodeOrder": 5,
        "nodeDisplayName": "Tool to Estimate Cost of Attending",
        "nodeTemplateCategory": "textParagraphs",
        "addGroupHeaders":true,
        "nodeContentId": '801_1_5', // tracking id, topic id, node id
        "conversationBlurbs":["We have an online tool that can help you estimate the cost of the program"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "This is free tool is provided as part of TESU’s commitment to the Principles of Excellence under Presidential Executive Order",
            "parargraphSubtitle": "Tool Link: https://www2.tesu.edu/financial-aid/shoppingsheet.php",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : [ "The FASS is designed to help you estimate the cost of attending Thomas Edison State University during the current Academic Year",
              "Tool also helps identify sources of financial aid so you can easily compare Thomas Edison State University with other institutions and make an informed decision about where to attend school",
              "We provide two versions of the Financial Aid Shopping Sheet (FASS).",
              "First version is available to any prospective, applicant, or enrolled student.",
              "Second version is available to currently enrolled students via your Online Student Services account and will display detailed financial aid information if you have been awarded such",
              ]
          },
        ],

      }, //topic 1,5
      {
        "topicID": 1,
        "nodeOrder": 6,
        "nodeDisplayName": "Go Back To Start",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '801_1_6',
        "terminationMode": 'goBackToStart',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "exitMessage": [""],
          }
        ]
      }, // 1, 6 go back to start

      {
        "topicID": 2,
        "nodeOrder": 0,
        "nodeDisplayName": "Hear From Our Graduates How TESU Helped Them",
        "nodeTemplateCategory": "audioVideoMessage",
        "nodeContentId": '801_2_0', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["The best way to know how TESU can advance your career", "Is to hear what our recent graduates have to say"],
        "audioAnnotation": [],
        "mediaType":"video",
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "mediaTitle": "Christopher Steade II",
            "mediaSubtitle": "BS 2018",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-1.mp4"
          },
          {
            "mediaTitle": "Keviin Kernahan",
            "mediaSubtitle": "BSBA 2018",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-2.mp4"
          },
          {
            "mediaTitle": "Nancy Distelkamp",
            "mediaSubtitle": "BSN 2018",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-3.mp4"
          },
          {
            "mediaTitle": "Peter M. Brenner II",
            "mediaSubtitle": "BS 2018",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-4.mp4"
          },
          {
            "mediaTitle": "Robert Pelsang II",
            "mediaSubtitle": "BSBA 2017",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-5.mp4"
          },
          {
            "mediaTitle": "Tina Matthews",
            "mediaSubtitle": "MALS 2018",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-6.mp4"
          },
          {
            "mediaTitle": "Ursula Gowran",
            "mediaSubtitle": "BSN 2018",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/hearfromgrads-7.mp4"
          }


        ],

      }, //topic 2, 0
      {
        "topicID": 2,
        "nodeOrder": 1,
        "nodeDisplayName": "TESU Experience in Words of Recent Graduates",
        "nodeTemplateCategory": "multimediaEndorsements",
        "nodeContentId": '801_2_1', // tracking id, topic id, node id
        "conversationBlurbs":["And our recent graduates in their own words "],
        "audioAnnotation": [],
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "endorsementType": "text",
            "endorserName": "Malik Rivers",
            "endorsement": "It was a great experience. As long as you put the work in, Thomas Edison is the place to get it done.",
            "endorserCompanyAndTitle": "BA - 2018"
          },
          {
            "endorsementType": "text",
            "endorserName": "Colleen Schenk",
            "endorsement": "I was able to complete my degree and fulfill a dream that I had, while being able to work and care for my family",
            "endorserCompanyAndTitle": "BSBA - 2018"
          },
          {
            "endorsementType": "text",
            "endorserName": "Kevin Kernahan",
            "endorsement": "To have some strategy behind what you learn and how you learn is very rewarding... you might as well organize your efforts in a way to get it recognized.",
            "endorserCompanyAndTitle": "BA - 2018"
          },
          {
            "endorsementType": "text",
            "endorserName": "Charles Thomson, Jr.",
            "endorsement": "My kids are very busy with sports. My wife is very busy with work, so it made it real easy for me...",
            "endorserCompanyAndTitle": "BA - 2018"
          },
          {
            "endorsementType": "text",
            "endorserName": "Yolanda Soto",
            "endorsement": "Just because I decided to take that leap of faith to finish my degree, all these doors opened up...",
            "endorserCompanyAndTitle": "BA - 2018"
          },
          {
            "endorsementType": "text",
            "endorserName": "Corinne Rao",
            "endorsement": "It was a 24-year course overall, but I've succeeded and it is the most important thing. It shows my children that I can do it, it shows my self that I can do it..",
            "endorserCompanyAndTitle": "BA - 2018"
          },




        ],

      }, //topic 2, 1
      {
        "topicID": 2,
        "nodeOrder": 2,
        "nodeDisplayName": "Metrics from The Survey of Recent Graduates",
        "nodeTemplateCategory": "bulletedText",
        "nodeContentId": '801_2_2', // tracking id, topic id, node id
        "addGroupHeaders":false,
        "conversationBlurbs":["Every year we ask our graduates to rate TESU along a number of dimensions", "Following are some metrics from the recent survey"],
        "audioAnnotation": [],
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "bulletStrings": [
              ["91 percent of recent graduates* and 95 percent of 5 year out alumni** give the University a rating of 'Excellent or Good'"],
              ["86 percent of graduates reported that the University prepared them for life-long learning"],
              ["84 percent of graduates reported that the University had a positive impact on their career." ],
              ["95 percent of recent graduates* and 90% of 5 year out alumni** have or would recommend the University to others." ]
            ]
          }


        ],

      }, //topic 2, 2
      {
        "topicID": 2,
        "nodeOrder": 3,
        "nodeDisplayName": "Corporations Who Recruit TESU Graduates",
        "nodeTemplateCategory": "imageGallery",
        "nodeContentId": '801_2_3', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["We partner with a number of loca, regional and national companies to place our students", "Here is an illustrative list of some of them"],
        "audioAnnotation": [],
        "mediaType":"video",
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-1.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-2.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-3.jpg"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-4.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-5.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-6.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-7.jpg"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-8.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-9.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-10.png"
          },
          {
            "imageCaption": "",
            "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/corp-11.png"
          },



        ],

      }, //topic 2, 3
      {
        "topicID": 2,
        "nodeOrder": 4,
        "nodeDisplayName": "Tap Into 50,000+ Alumni Network",
        "nodeTemplateCategory": "audioVideoMessage",
        "nodeContentId": '801_2_4', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["One of the best ways to advance your career", "...is to tap into our alumni network", "Here are some tips on how one can do that"],
        "audioAnnotation": [],
        "mediaType":"video",
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "mediaTitle": "Opportunities to Leverage Alumni Network",
            "mediaSubtitle": "Community of over 50,000+ TESU graduates",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/alumninetworking.mp4"
          }


        ],

      }, //topic 2, 4
      {
        "topicID": 2,
        "nodeOrder": 5,
        "nodeDisplayName": "Go Back To Start",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '801_2_5',
        "terminationMode": 'goBackToStart',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "exitMessage": [""],
          }
        ]
      }, // 2, 5 go back to start

      {
        "topicID": 3,
        "nodeOrder": 0,
        "nodeDisplayName": "About Thomas Edison University",
        "nodeTemplateCategory": "bulletedText",
        "addGroupHeaders":false,
        "nodeContentId": '801_3_0', // tracking id, topic id, node id
        "conversationBlurbs":["Let's start with a quick overview of our history and academic programs"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "bulletStrings": [
              ["Thomas Edison State College was founded in 1972."],
              ["In 2015, we were awarded university status & became Thomas Edison State University"],
              ["We offer associate, bachelor's and master's degrees in more than 100 areas of study in 5 of the schools" ],
              ["The Heavin School of Arts and Sciences provides an interdisciplinary curriculum in the liberal arts, humanities, natural sciences and social sciences as well as programs in the human services."],
              ["The School of Applied Science and Technology provides programs in the fields of the applied sciences that benefit from technical currency, practical knowledge and applied skills."],
              ["The School of Business and Management provides degree programs that prepare leaders to add value to their firms and organizations in the dynamic global marketplace" ],
              ["The W. Cary Edwards School of Nursing provides students with degree programs for career needs of licensed registered nurses"],
              ["The John S. Watson School of Public Service and Continuing Studies offers degree programs and advanced certificate programs in public policy studies, nonprofit management, financial management, public policy analysis, regional planning, and others" ]
            ]
          }

        ],

      }, //topic 3,0
      {
        "topicID": 3,
        "nodeOrder": 1,
        "nodeDisplayName": "What Makes Thomas Edison Different",
        "nodeTemplateCategory": "bulletedText",
        "addGroupHeaders":true,
        "nodeContentId": '801_3_1', // tracking id, topic id, node id
        "conversationBlurbs":["Our focus on helping adults such as you is one of our key strengths"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "bulletHeader": "We focus exclusively on educating adults",
            "bulletStrings": [
              ["Because serving busy, motivated adults is the only thing we do"],
              ["Our focus is and always has been to serve adults"],
            ]
          },
          {
            "bulletHeader": "Because you’ll benefit from our experience",
            "bulletStrings": [
              ["We are one of the oldest colleges in the country dedicated exclusively to adults"],
              ["We design garduate and undergraduat programs specifically for you, the adult student"],
            ]
          },
          {
            "bulletHeader": "Because the value is exceptional",
            "bulletStrings": [
              ["Academic excellence and reasonable tuition and fees"],
              ["Plus, financial aid and scholarships are available" ]
            ]
          },
          {
            "bulletHeader": "Because you want to earn your achievement.",
            "bulletStrings": [
              ["You are motivated and talented"],
              ["You want to finish what you started"],
            ]
          }

        ],

      }, //topic 3,1
      {
        "topicID": 3,
        "nodeOrder": 2,
        "nodeDisplayName": "Our President on Role & Mission of TESU",
        "nodeTemplateCategory": "audioVideoMessage",
        "nodeContentId": '801_3_2', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["I think this short introduction to TESU from our President really captures well the essence of TESU", "Much better than what I can do"],
        "audioAnnotation": [],
        "mediaType":"video",
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "mediaTitle": "A Word from Our President",
            "mediaSubtitle": "Dr. George A Pruitt",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/whatsdifferent.mp4"
          }


        ],

      }, //topic 3, 2
      {
        "topicID": 3,
        "nodeOrder": 3,
        "nodeDisplayName": "What Can You Expect as a Student",
        "nodeTemplateCategory": "audioVideoMessage",
        "nodeContentId": '801_3_3', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["We go out of the to help our students navigate the burden of learning", "Most have a busy life with number of family and professional demands on their time"],
        "audioAnnotation": [],
        "mediaType":"video",
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "mediaTitle": "What Can You Expect as a Student",
            "mediaSubtitle": "Voices of Our Students",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/whatcanyouexpect.mp4"
          }


        ],

      }, //topic 3, 3
      {
        "topicID": 3,
        "nodeOrder": 4,
        "nodeDisplayName": "Where are Some of Our Grads Today",
        "nodeTemplateCategory": "audioVideoMessage",
        "nodeContentId": '801_3_4', // tracking id, topic id, node id
        "displayStyle": "fullScreen",
        "conversationBlurbs":["Our graduates get into a broad range of fields and vocations", "Here is a short video from them"],
        "audioAnnotation": [],
        "mediaType":"video",
        "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

          {
            "mediaTitle": "The Difference We Make",
            "mediaSubtitle": "What Our Graduates Have To Say",
            "mediaSource": "Thomas Edison State University",
            "uploadedAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/whereareourgards.mp4"
          }


        ],

      }, //topic 3, 4
      {
        "topicID": 3,
        "nodeOrder": 5,
        "nodeDisplayName": "Select FAQ Topic of Interest",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_3_5',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchQuery": false,
        "conversationBlurbs":["You probably have a number of questions that I haven't covered", " We have compiled some frequently asked Q&As for you","Select a topic that interests you"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "About Going Back to College",
            "returnValue": "back"
          },
          { "displayName": "About Admissions and Application",
            "returnValue": "admissions"
          },
          { "displayName": "About Academic Credit",
            "returnValue": "credit"
          },
          { "displayName": "About Cost and Financial Aid",
            "returnValue": "aid"
          },
          { "displayName": "About Credit Hour Residency",
            "returnValue": "residency"
          },
          { "displayName": "About Degree Programs",
            "returnValue": "programs"
          },
          { "displayName": "About Enrollment",
            "returnValue": "enroll"
          },
          { "displayName": "About Studying at TESU",
            "returnValue": "study"
          }

        ]
      }, // topic 3, 5
      {
        "topicID": 3,
        "nodeOrder": 6,
        "nodeDisplayName": "FAQ: About Going Back to College",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_6',
        "answerRequired": true,
        "questionType": "singleChoice",
        "conversationBlurbs":["The Q&As on going to back to college as an adult"],
        "audioAnnotation": [],
        "nodeInputContent": [

          {
            "parargraphTitle": "I have earned college credits in the past. Do I have to start over?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Not necessarily. Many colleges and universities accept transfer credits from community or county colleges, or other accredited four-year degree programs.",
            "paragraphBullets" : [""]
          },

          {
            "parargraphTitle": "I have a really busy life. How much time will I have to commit to earn my degree?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "It depends on the programs and degree requirements of the college or university you choose. Many schools require you to attend classes on campus several evenings a week or on weekends and then prepare for projects and tests outside class hours. Some schools offer more flexible options, geared to adult learners, such as distance learning or independent self-study, which lets you work at your own pace. And yet other schools offer a combination of both on-campus and distance learning. The length of time also varies according to the number of credits, if any, you are able to transfer to your new school. The more transfer credit you have, the less coursework you will have to complete.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "I’ve been working in my field for 12 years. Can I get credit for what I’ve learned?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "That is a possibility. Thomas Edison State University and several other colleges allow you to take tests to demonstrate college-level knowledge or earn credits for college-level knowledge attained through employment experience, the military or other life experiences. You may even be able to earn credit for licenses and certificates you already may have or courses you may have taken at work",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Do I have to take an entrance exam?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Maybe. Along with a completed application, application fee, high school or college transcripts, many colleges require prospective students to submit scores from a standardized entrance examination, such as the SAT or ACT (undergraduate) or the GMAT or MAT (graduate). Schools that work primarily with adult learners may be a little more flexible in their admission requirements.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Summer is a light time for me at work. Do I have to wait until September to begin?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Classes at most traditional colleges begin at the start of the spring, summer or fall semester. However, if you choose a college that offers online or distance learning, or other nontraditional programs, you may be able to start classes as soon as your enrollment is complete—no matter what time of year it is",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "I like the idea of learning online, but I also like interacting with a professor and other students. Is it possible to have both?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes, it is possible to have both—if you choose a school that offers both traditional and nontraditional degree programs or a school that caters specifically to adult learners. Certain schools give you the option of taking courses at a distance or attending classes on campus or at an accredited college or university of your choice, and then transferring credits back to your home school",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "It’s hard to predict the demands of work and family life. What if I have to take a hiatus?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "You might do well at a college that recognizes your commitment to family and career, and offers flexibility for motivated adult learners. If you need to take a break from coursework for personal or professional reasons, these schools let you resume your degree program at any time, without any loss of earned credits.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "There are so many demands on my financial resources. Can I afford to go back to college for my degree?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Finishing your degree is an important investment in your future, and the cost depends on how many credits your school and major require, and the fee per credit hour. Tuition and fees also vary whether you decide to attend classes on campus or complete your coursework through nontraditional means such as distance learning or guided self-study. You’ll also need to allow for the costs of books and school supplies. Many colleges will help you determine if you qualify for financial assistance and some will even guide you through the application process for grants, scholarships, student loans, and state and federal financial aid programs. You also may wish to ask your employer if you qualify for tuition reimbursemen",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 6
      {
        "topicID": 3,
        "nodeOrder": 7,
        "nodeDisplayName": "FAQ: About Admissions and Application",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_7',
        "conversationBlurbs":["A few tips on the admissions and application process"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "Can I apply online?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Undergraduate and graduate students  interested in any of our degree programs can now apply by using our online application.  Access our applications page.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Do you need copies of my transcript?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. All transcripts should be sent directly to the University in unopened, sealed envelopes from one of the approved, secured electronic delivery systems or directly from the institution(s) you attended. Learn about applying as an undergraduate. Learn about applying to a graduate program.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Where do I send my transcript(s)?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "The best way to have your official college transcripts sent to Thomas Edison State University is through one of the following secured electronic delivery systems. ",
            "paragraphBullets" : ["eScrip-Safe",
              "Joint Services Transcript (military)",
              "NJTransfer",
              "Parchment",
              "Avow",
              "WES World Educational Services (foreign credentials only)",
              "National Student Clearinghouse"]
          },
          {
            "parargraphTitle": "Do you require SAT or ACT scores?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "No. Students are not required to take the SAT or ACT. You must have a high school diploma or have passed the GED. And you must be 21 years of age. If you’re an international student, the application requirements are slightly different. Learn about applying.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "What happens after I apply?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Applications are acknowledged via letter and email. The University provides all applicants with an academic evaluation of past college credits, professional and/or military training and other experiences. Evaluations will be completed within 10 business days from the date all your transcripts have been received.. Once you are accepted, you will receive login information that enables you to track progress of your evaluation via Online Student Services. Your evaluation will help determine how your college-level credits can transfer to Thomas Edison State University. Once your academic evaluation is completed, you can make an appointment with an academic advisor to review your evaluation and learn how your transfer credit is being applied to your degree, what courses and requirements you still need to complete to finish your degree and what methods of earning credit you can use to earn that credit.  Then it is time for you to enroll.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How do I enroll?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Admitted students enroll simply by registering for a course and selecting a tuition plan that best meets their needs. This usually done via Online Student Services.",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 7
      {
        "topicID": 3,
        "nodeOrder": 8,
        "nodeDisplayName": "FAQ: About Academic Credit",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_8',
        "conversationBlurbs":["Transferring credits can help you lower the cost", "So some answers to questions in this area"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "Can I transfer my credits to Thomas Edison State University?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. Actually, most of our students transfer their previously earned college credits to Thomas Edison State University to speed the completion of their degrees. Learn more.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How do I earn credit for knowledge I’ve gained outside the classroom?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Our Prior Learning Assessment (PLA) offerings, including portfolio assessment, the TECEP exam program, credit for certain reviewed licenses, training, and certifications, and others give you the opportunity to demonstrate college-level knowledge you’ve acquired outside the classroom and apply that knowledge toward a degree program. Browse our PLA Course Description Database , list of available TECEP® tests and our list of Academic Program Reviews.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How many of my credits will you accept from other colleges or universities?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : ["If you studied at a regionally accredited community college, you may apply up to 90 credits.","If you studied at a regionally accredited four-year institution, you may fulfill all your degree requirements with transfer credit except the two required courses from TESU:"]
          },
          {
            "parargraphTitle": "Can I earn credit by “testing out” of a course?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. Our TECEP® program allows you to prepare for an exam that can earn you college credit. Browse list of available TECEP® tests. In addition, numerous other exam programs can earn you credit. ",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Can I earn credit for my professional training, certification or licenses?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. Thomas Edison State University will award credit for professional training and credentials evaluated and approved for credit by the University through our Office for Assessment of Professional and Workplace Learning. The University may also accept credit recommendations for professional training and credentials from an institutional member of the Consortium for the Assessment of College Equivalency (CACE), the National College Credit Recommendation Service (National CCRS) of the Board of Regents of the University of the State of New York, and the American Council on Education's College Credit Recommendation Service (CREDIT) program.  For more information, visit our page on Earning Credit for Professional Training.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Can I earn credit for military training?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. For nearly three decades, we’ve been meeting the unique educational needs of military personnel. More about our Military Degree Completion Program.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Can I earn credit for life experience at Thomas Edison State University?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Not exactly. Thomas Edison State University can grant you credit for knowledge you gained through life experience, but not for the experience itself. Students at the University can demonstrate that they possess college-level knowledge acquired outside the classroom through our Prior Learning Assessment programs.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Do I need to take all my courses at Thomas Edison State University?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "No. Our flexible credit transfer program enables students to complete courses at other regionally accredited institutions and then transfer those credits into your degree program at Thomas Edison State University.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Does Thomas Edison State University have any articulation agreements with any colleges or universities?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. Thomas Edison State University has entered into articulation agreements with many colleges and universities. An articulation agreement is a formal agreement or partnership between Thomas Edison State University and another institution of higher education. These articulation agreements determine which courses will transfer for degree credit or fulfill Thomas Edison State University course equivalencies.\n",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 8
      {
        "topicID": 3,
        "nodeOrder": 9,
        "nodeDisplayName": "FAQ: About Cost and Financial Aid",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_9',
        "conversationBlurbs":["We help students secure financial aid and are transparent about the cost of education"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "Is tuition expensive?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "We’re competitively priced. Most important, we offer a number of tuition plans, so you can design a program with a schedule and cost that fit for you. More about tuition.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Do you offer scholarships?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. We offer a number of scholarship programs to help you afford your education. More about scholarships.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Is financial aid available?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. We participate in a number of state and federal aid programs.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How do I apply for financial aid?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "First, you must be an accepted, degree-seeking student at Thomas Edison State University. Then, complete our application for financial aid as well as a FAFSA. For more information, contact us. Access Financial Aid Forms.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "When will I learn if I’ve received financial aid?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "The financial aid application process may take up to six weeks. Learn more about financial aid.",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 9
      {
        "topicID": 3,
        "nodeOrder": 10,
        "nodeDisplayName": "FAQ: About Credit Hour Residency",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_10',
        "conversationBlurbs":["A few commonly asked questions on credit hour residency",],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "What does a credit hour residency requirement mean?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Residency requirements are courses that you must complete at Thomas Edison State University. Residency requirements at Thomas Edison State University do not mean that you must physically come to the University or attend courses at any physical location.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Which enrollment plans require a credit hour residency?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Please note that students who are part of the tuition plans listed below must complete a credit hour residency requirement in order to graduate from Thomas Edison State University:",
            "paragraphBullets" : ["Per Credit Tuition Plan",
              "Military Degree Completion Plan",
              "Navy College Partnership Program",
              "GoArmyEd/eArmyU Program",]
          },
          {
            "parargraphTitle": "How do I know if my enrollment plan requires a credit hour residency?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "To determine your enrollment plan, verify your \"Student Status\" in Online Student Services on your Student Profile page. If the code is one listed below, it relates to an enrollment plan with a credit hour residency requirement:",
            "paragraphBullets" : ["Per Credit Tuition Plan: NJ1TU, OS1TU, NJ4TU, OS4TU",
              "Military Degree Completion Plan: MDAPP, MDCEN, MDIAC",
              "Navy College Partnership Program: NCAPP, NCREN, NCIAC",
              "GoArmyEd/eArmyU Program: MDAPP, MDCEN, MDIAC, EAREN, EAIAC"]
          },
          {
            "parargraphTitle": "How do I know if my enrollment plan requires a credit hour residency?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "To determine your enrollment plan, verify your 'Student Status' in Online Student Services on your Student Profile page. If the code is one listed below, it relates to an enrollment plan with a credit hour residency requirement:\n",
            "paragraphBullets" : []
          },


        ]
      }, // topic 3, 10
      {
        "topicID": 3,
        "nodeOrder": 11,
        "nodeDisplayName": "FAQ: About Degree Programs",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_11',
        "conversationBlurbs":["Questions regarding our certification, undergraduate, and graduate programs"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "What degrees do you offer?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "We offer associate degree programs, bachelor’s degree programs and master’s degree programs.",
            "paragraphBullets" : []
          },{
            "parargraphTitle": "Which programs can I complete entirely online?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "You can complete any of the degree programs in our Conventional approach entirely online. This includes all of our graduate programs.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How long does it take to complete a bachelor’s degree?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "It depends on how many credits you bring to your program. Most students complete their degrees within three years. However, all students work at their own pace, and there’s no time limit on completing your degree. Learn more about ways of earning credit.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How do I enroll?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "You can enroll immediately upon acceptance. Select a tuition plan that fits with your schedule. You may pay and register for courses online, by phone or by mail. Learn more about how to enroll.",
            "paragraphBullets" : []
          },{
            "parargraphTitle": "What graduate programs does Thomas Edison State University offer?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Click here to see our career-focused, online graduate programs, which are each designed to prepare students for professional advancement.",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 11
      {
        "topicID": 3,
        "nodeOrder": 12,
        "nodeDisplayName": "FAQ: About Enrollment",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_12',
        "conversationBlurbs":["A few qs on enrollment"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "How do I check my enrollment status?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "You can check your enrolled student status in myEdison. Your Student Profile page shows 'Student Status' on the top right.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "What are the benefits to having and maintaining enrolled student status?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "",
            "paragraphBullets" : ["You must maintain continuous enrolled student status in the University by selecting one of the enrollment plans at least once a year in order to be eligible to continue under the same degree requirements shown on your academic evaluation.",
              "You must maintain continuous enrollment in the University to be eligible to apply for and be reviewed for graduation. This student status requirement applies even if you select a degree program for which we do not offer all the courses you must take to meet the requirements or if you need additional time beyond your annual enrollment to complete your final course(s) with Thomas Edison State University.",
              "As an enrolled student, we encourage you to schedule an appointment with a University advisor to thoroughly review your evaluation and develop a degree program. During this important process, your advisor will work with you to develop a pathway that maps out how you will earn your degree.",
              "As an enrolled student, you will have enhanced access to myEdison, the University's online course management system, which enables you access your courses. Students can register in real time for courses online through Online Student Services. You may also register via telephone by calling (888) 442-8372 Monday-Friday from 8 a.m. to 4 p.m., via fax at (609) 292-1657 or via the U.S. mail.",
            ]
          },
          {
            "parargraphTitle": "What should I do if my enrolled student status lapses?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "If your enrolled student status lapses at any point, and you have not officially requested and been approved for a Catalog Year Extension from the University, you are officially no longer pursuing a degree plan at Thomas Edison State University. You will not be able to return to graduate at a later date with the same degree plan if your enrolled student status has lapsed.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "Should you decide to return in the future, you will be required to complete the degree requirements and follow University policies in effect at the time of your return. Please be aware that there may be significant differences between your original academic evaluation and plan and the new ones and you may be required to complete more courses than were required when your enrolled student status ended.",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "You may continue to take courses at Thomas Edison State University as a nonmatriculated or non-degree seeking student. However, you will no longer have access to an academic evaluation online and you will need to reapply in the future in order to determine your new degree requirements.",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 12
      {
        "topicID": 3,
        "nodeOrder": 13,
        "nodeDisplayName": "FAQ: About Studying at TESU",
        "nodeTemplateCategory": "textParagraphs",
        "nodeContentId": '801_3_13',
        "conversationBlurbs":["Answers to questions about studying at TESU"],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "parargraphTitle": "Are courses offered in different formats?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Yes. Thomas Edison State University has developed courses in a wide range of formats for adult learners to fit several types of learning styles. The University offers online courses; guided independent study programs; online e-Pack® courses; examination programs such as TECEP®; and Prior Learning Assessment courses that enable students to demonstrate they possess college-level knowledge that has been acquired outside a classroom.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "What is myEdison®?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "myEdison® is the online student portal through which current students access their accounts, log on for courses, check on their assignments and grades, and so on, utilizing the University's online learning management system. It’s part of what makes it possible to study anytime, anywhere.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "When do classes start?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "For undergraduates, new terms start every month. For graduate students, our programs begin on one of four start dates. Learn more.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "May I start at any time?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Undergraduates may enroll any month of the year. Graduate programs begin quarterly.",
            "paragraphBullets" : []
          },{
            "parargraphTitle": "What student services are available online?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Several student services are available online. These include advising, financial aid, enrolling and registering for classes, and purchasing books. More about student services.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How do I register for classes?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Students typically register for courses and pay tuition via Online Student Services.",
            "paragraphBullets" : []
          },
          {
            "parargraphTitle": "How can I raise my TESU GPA?",
            "parargraphSubtitle": "",
            "contentSource": "",
            "paragraphHeader" : "Thomas Edison State University GPA are based solely on graded credits earned through Thomas Edison State University coursework; regardless of when these credits were earned and regardless of whether the course is used to fulfill a degree requirement. As of July 1, 2011, only grades which reflect earned credits (A, A-, B+, B, B-, C+, C, C-, D, F, IF, and W) will be used to calculate the official Thomas Edison State University GPA. Please note that NC (no credit) grades associated with Thomas Edison State University Prior Learning Assessment (PLA), e-Pack® or TECEP® will continue to be excluded from the transcript, even if the course start date is after July 1, 2011. Should a student not earn credit, the PLA, e-Pack® or TECEP® will not appear on the transcript. Learn more about our new GPA policy.",
            "paragraphBullets" : []
          }

        ]
      }, // topic 3, 13
      {
        "topicID": 3,
        "nodeOrder": 14,
        "nodeDisplayName": "Go Back To Start",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '801_3_14',
        "terminationMode": 'goBackToStart',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "exitMessage": [""],
          }
        ]
      }, // 3, 14 go back to start



  ];

    setupParameters = [
    {
      "metaData": {
        "trid": "3890"
      }
    },
    {
      "returnedData": {
        "traffic": [
          "email",
          "textMsg",
          "direct",
          "all"
        ],
        "pageType": "website",
        "device": [
          "mobile",
          "desktop", "tablet"
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
        ]
      }
    }];

    activateParameters = [
        {
          "metaData": {
            "trid": "389"
          }
        },
        {
          "returnedData": {
            "trafficAllocatedToBot": "1.0",
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

        ]

      }
    }];

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
    
    function publishTopicsMeta(a) {

    var response = postPayload(storyTopicsMeta, 'topicsMeta', trackingID);

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



    function publishSetupParameters(a) {

    var response = postPayload(setupParameters, 'setup', trackingID);

    }

    function publishActivateParameters(a) {

    var response = postPayload(activateParameters, 'activate', trackingID);

  }

    function publishCampaignConversionGoals(a) {

    var response = postPayload(conversionParameters, 'cgoal', trackingID);

  }

    function newCampaignAll(a) {

      var response = newCampaignMeta(a);
      var response = publishTopicsMeta(a);
      var response = publishNodesMeta(a);
      var response = publishNodeInputContent(a);

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

  }

    function endPublishing(a) {

      var response = postPayload(null, 'end', trackingID);

    }
    

});



