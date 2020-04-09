

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
            "debugMode": false
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
              "campaignName": "TESU Curriculum Search",
              "conversationInitiationMode": "PR-1",
              "webproperty": "bs-local.com",
              "searchType": "curriculum",
              "campaignType": "simple",
              "debugMode": false,
              "visitorGreeting": "Hey there! Would you like to know how TESU can help advance your career?"
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
           "topicName": "TESU Curriculum Search"
         }

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
            "nodeDisplayName": "Curriculum Overview",
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
            "nodeDisplayName": "Core Course Details",
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
            "nodeDisplayName": "Continue Searching Academic Programs",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "yes",
                "skipTo": 0
              },
              {
                "resp": "no",
                "skipTo": 25
              }
            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": false,
          }, // 23

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
        "searchContent": false,
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
          "searchContent": false,
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
          "questionType": "singleChoice",
          "searchContent": false,
        "searchQuery": true,
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
          "questionType": "singleChoice",
          "searchContent": false,
          "searchQuery": true,
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
          "questionType": "singleChoice",
          "searchContent": false,
          "searchQuery": true,
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
          "questionType": "singleChoice",
          "searchContent": false,
          "searchQuery": true,
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
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
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
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
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
        "searchContent": false,
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
        "searchContent": false,
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
        "searchContent": false,
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
        "questionType": "singleChoice",
        "searchContent": false,
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
        "searchContent": false,
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
        "searchContent": false,
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
        "searchContent": false,
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
        "searchContent": false,
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
        "searchContent": false,
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
        "searchContent": true,
        "searchQuery": false,
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
          "searchContent": true,
          "searchQuery": false,
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
          "searchContent": true,
          "searchQuery": false,
          "nodeContentId": '801_0_20',
          "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
          "audioAnnotation": [],
          "nodeInputContent": [

          ]
        }, // 0, 20
      {
          "topicID": 0,
          "nodeOrder": 21,
          "nodeDisplayName": "Curriculum Overview",
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
        "nodeDisplayName": "Core Course Details",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_22',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeInputContent": [

        ]
      }, // 0, 22

      {
        "topicID": 0,
        "nodeOrder": 23,
        "nodeDisplayName": "Continue Searching Directory",
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "nodeContentId": '801_0_24',
        "conversationBlurbs":["I hope you found it easy to search our directory this new way", "Would you like to continue searching the directory"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Yes, Take me Back",
            "returnValue": "yes"
          },
          { "displayName": "No, I am Done Thanks",
            "returnValue": "no"
          },

        ]
      }, // 0, 23


  ];

    storyNodesOutputContent = [


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
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q1_sc",
            "label": "Business & Management",
            "value": "business",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q1_sc",
            "label": "Science & Technology",
            "value": "technology",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q1_sc",
            "label": "Public Policy & Administration",
            "value": "policy",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q1_sc",
            "label": "Health Service",
            "value": "health",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q1_sc",
            "label": "Education",
            "value": "education",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q1_sc",
            "label": "Arts & Science",
            "value": "arts",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 0 level 1, singleChoice

      {
        "topicID": 0,
        "nodeOrder": 1,
        "nodeDisplayName": "Select Concentration in Business & Management",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_1',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["We offer a number of different concentrations in Business Management", "Now select one that interests you"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q2_sc",
            "label": "General Management",
            "value": "generalm",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Accounting Programs",
            "value": "accounting",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Computer Information Systems",
            "value": "computeri",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Data Analytics",
            "value": "aataa",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Entrepreneurship",
            "value": "entrepreneurship",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Finance",
            "value": "finance",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Healthcare Management",
            "value": "healthcarem",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Human Resource Management",
            "value": "humanresource",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "International Business",
            "value": "international",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Marketing",
            "value": "marketing",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Operations Management",
            "value": "operationsm",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Organizational Leadership",
            "value": "organizationall",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Organizational Management",
            "value": "organizationalm",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q2_sc",
            "label": "Project Management",
            "value": "project",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 1 level 2, singleChoice
      {
        "topicID": 0,
        "nodeOrder": 2,
        "nodeDisplayName": "Select Area of Interest in Science & Technology",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_2',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["We offer a rich and diverse program in Science and Technology", "Select an area of interest to you"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q3_sc",
            "label": "Health & Biomedical",
            "value": "biomedical",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q3_sc",
            "label": "Nuclear Science",
            "value": "nuclearscience",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q3_sc",
            "label": "Information Technology",
            "value": "informationt",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q3_sc",
            "label": "Cybersecurity",
            "value": "cybersecurity",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q3_sc",
            "label": "Aviation Science",
            "value": "aviations",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 2 level 3 - feed equipment subcategories
      {
        "topicID": 0,
        "nodeOrder": 3,
        "nodeDisplayName": "Select Public Policy & Administration Concentration",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_3',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Our public policy programs equip you for the dealing with contemporary issues in this area", "Select an area of study that you want to focus on"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q4_sc",
            "label": "Public Service Leadership",
            "value": "publicservice",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q4_sc",
            "label": "Human Services",
            "value": "humanservices",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q4_sc",
            "label": "Homeland Security and Emergency Management",
            "value": "homelandsecurity",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 3
      {
        "topicID": 0,
        "nodeOrder": 4,
        "nodeDisplayName": "Select Health Services Study Area",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_4',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["If you are interested in a career in nursing we offer 4 different tracks", "Choose one"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q5_sc",
            "label": "Nurse Educator",
            "value": "nurseedu",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q5_sc",
            "label": "Nursing Informatics",
            "value": "nurseinfor",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q5_sc",
            "label": "Nursing Administration",
            "value": "nurseadmin",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q5_sc",
            "label": "Nursing Practice",
            "value": "nursepract",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 4
      {
        "topicID": 0,
        "nodeOrder": 5,
        "nodeDisplayName": "Select Education Concentration",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_5',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Online education and more, please make a selection"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q6_sc",
            "label": "Education Technology & Online Learning",
            "value": "educationtechnology",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q6_sc",
            "label": "Educational Leadership",
            "value": "educationall",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 5
      {
        "topicID": 0,
        "nodeOrder": 6,
        "nodeDisplayName": "Concentration in Arts & Sciences",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_6',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["From biology to envionmentl science to photography, we offer it all", "Choose a topic you want to explore"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Art",
            "value": "art",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Biology",
            "value": "biology",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Communications",
            "value": "communications",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Computer Science",
            "value": "computers",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Criminal Justice",
            "value": "criminal",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "English",
            "value": "english",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Environmental Studies",
            "value": "environmental",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Foreign Language",
            "value": "foreign",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "History",
            "value": "history",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "International Studies",
            "value": "international",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Labor Studies",
            "value": "labor",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Liberal Studies",
            "value": "liberal",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Mathematics",
            "value": "mathematics",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Music",
            "value": "music",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Philosophy",
            "value": "philosophy",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Photography",
            "value": "photography",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Political Science",
            "value": "political",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Psychology",
            "value": "psychology",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Religion",
            "value": "religion",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Sociology",
            "value": "sociology",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q7_sc",
            "label": "Theater Arts",
            "value": "theater",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 6

      {
        "topicID": 0,
        "nodeOrder": 7,
        "nodeDisplayName": "Concentration in Health & Biomedical",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_7',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Prepare youself for a career in Biomedical Sciences", "Choose a category that interest"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Medical Imaging",
            "value": "imaging",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Clinical Laboratory Science",
            "value": "clinicallaboratory",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Biomedical Electronics",
            "value": "biomedical",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Dental Hygiene",
            "value": "dental",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Health Services Technology",
            "value": "hst",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Radiation Therapy",
            "value": "radiation",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q8_sc",
            "label": "Respiratory Care",
            "value": "respiratory",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // // 0, 7 level 2, singleChoice
      {
        "topicID": 0,
        "nodeOrder": 8,
        "nodeDisplayName": "Nuclear Science Study Area",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_8',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Nuclear technology and more", "Choose an area you want to search"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Nuclear Energy Engineering Technology",
            "value": "nuclearenergy",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Nuclear Engineering Technology",
            "value": "nuclearengineering",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Nuclear Medicine Technology",
            "value": "nuclearmedicine",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Radiation Protection",
            "value": "radiationprotection",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Radiation Protection, Health Physics",
            "value": "radiationprotectionh",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Energy Systems Technology",
            "value": "energysystems",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Nuclear Energy Technology Management",
            "value": "nuclearenergy",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q9_sc",
            "label": "Electronics Engineering Technology",
            "value": "electronicsengineering",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // // 0, 8 level 3 - feed ingredient subcategories
      {
        "topicID": 0,
        "nodeOrder": 9,
        "nodeDisplayName": "Information Technology Study Concentration",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_9',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Prepare yourself for the world of information technology", "Select a study area"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q10_sc",
            "label": "Information Technology",
            "value": "it",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q10_sc",
            "label": "Health Services Technology",
            "value": "healthtechnology",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q10_sc",
            "label": "Electrical Technology",
            "value": "electrical",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q10_sc",
            "label": "Electronics Systems Engineering Technology",
            "value": "electronics",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q10_sc",
            "label": "Computer Science",
            "value": "computerscience",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q10_sc",
            "label": "Data Science & Analytics",
            "value": "datascience",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 9
      {
        "topicID": 0,
        "nodeOrder": 10,
        "nodeDisplayName": "Aviation Science Concentration",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_10',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Pick an area that interest you"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q11_sc",
            "label": "Air Traffic Control",
            "value": "traffic",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q11_sc",
            "label": "Aviation Flight Technology",
            "value": "flight",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q11_sc",
            "label": "Aviation Maintenance Technology",
            "value": "amaintenance",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q11_sc",
            "label": "Aviation Management",
            "value": "amanagement",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 10

      {
        "topicID": 0,
        "nodeOrder": 11,
        "nodeDisplayName": "Select Type of Degree You Want to Pursue",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_11',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q12_sc",
            "label": "Graduate & Post Graduate",
            "value": "graduate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q12_sc",
            "label": "Undergraduate",
            "value": "ug",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q12_sc",
            "label": "Associate",
            "value": "associate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q12_sc",
            "label": "Certificate",
            "value": "certificate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 11, g, ug, assoc, cert
      {
        "topicID": 0,
        "nodeOrder": 12,
        "nodeDisplayName": "Select Program You Want to Pursue",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_12',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q13_sc",
            "label": "Graduate & Post Graduate",
            "value": "graduate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q13_sc",
            "label": "Undergraduate",
            "value": "ug",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q13_sc",
            "label": "Associate",
            "value": "associate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 12, g ug, assoc
      {
        "topicID": 0,
        "nodeOrder": 13,
        "nodeDisplayName": "Select Certificate or Undergraduate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_13',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q14_sc",
            "label": "Undergraduate",
            "value": "ug",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q14_sc",
            "label": "Certificate",
            "value": "certificate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 13, ug, certificate
      {
        "topicID": 0,
        "nodeOrder": 14,
        "nodeDisplayName": "Select Graduate or Undergraduate Or Certificate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_14',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q15_sc",
            "label": "Graduate & Post Graduate",
            "value": "graduate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q15_sc",
            "label": "Undergraduate",
            "value": "ug",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q15_sc",
            "label": "Certificate",
            "value": "certificate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 14, g, ug, cert
      {
        "topicID": 0,
        "nodeOrder": 15,
        "nodeDisplayName": "Select Graduate or Undergraduate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_15',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q16_sc",
            "label": "Graduate & Post Graduate",
            "value": "graduate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q16_sc",
            "label": "Undergraduate",
            "value": "ug",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 15, g ug,
      {
        "topicID": 0,
        "nodeOrder": 16,
        "nodeDisplayName": "Select Graduate or Certificate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_16',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q17_sc",
            "label": "Graduate & Post Graduate",
            "value": "graduate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q17_sc",
            "label": "Certificate",
            "value": "certificate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 16, g, certificate
      {
        "topicID": 0,
        "nodeOrder": 17,
        "nodeDisplayName": "Select Associate or Undergraduate Program",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '801_0_17',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose the type of degree you want to pursue"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q18_sc",
            "label": "Undergraduate",
            "value": "ug",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q18_sc",
            "label": "Associate",
            "value": "associate",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 17, assoc, ug

      {
        "topicID": 0,
        "nodeOrder": 18,
        "nodeDisplayName": "Course Learning Objective",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_18',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeOutputContent": [

        ]
      }, // 0, 18
      {
        "topicID": 0,
        "nodeOrder": 19,
        "nodeDisplayName": "Key Information & Dates",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_19',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeOutputContent": [

        ]
      }, // 0, 19
      {
        "topicID": 0,
        "nodeOrder": 20,
        "nodeDisplayName": "Faculty Leadership Profile",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_20',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeOutputContent": [

        ]
      }, // 0, 20
      {
        "topicID": 0,
        "nodeOrder": 21,
        "nodeDisplayName": "Curriculum Overview",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_21',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeOutputContent": [

        ]
      }, // 0, 21
      {
        "topicID": 0,
        "nodeOrder": 22,
        "nodeDisplayName": "Core Course Details",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '801_0_22',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeOutputContent": [

        ]
      }, // 0, 22

      {
        "topicID": 0,
        "nodeOrder": 23,
        "nodeDisplayName": "Continue Searching Directory",
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "nodeContentId": '801_0_24',
        "conversationBlurbs":["I hope you found it easy to search our directory this new way", "Would you like to continue searching the directory"],
        "audioAnnotation": [],
        "nodeOutputContent": [[{
          "da_ddf": {
            "name": "q5_sc",
            "label": "Sure. Continue to Search",
            "value": "yes",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
          "da_ddf": {
            "name": "q5_sc",
            "label": "No. I am Done. Thanks",
            "value": "no",
            "required": true,
            "valueType": ""
          }
        }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
      }, // 0, 23



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

  }

    function endPublishing(a) {

      var response = postPayload(null, 'end', trackingID);

    }
    

});



