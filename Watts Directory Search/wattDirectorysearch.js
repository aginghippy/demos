

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
    trackingID= 701,
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
            "cnam": "PMMI Survey",
            "cimod": "PR-1",
            "webproperty": "bs-local.com",
            "searchType": "directory",
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
              "campaignName": "Feed Strategy Buyers Guide",
              "conversationInitiationMode": "PR-1",
              "webproperty": "bs-local.com",
              "searchType": "directory",
              "campaignType": "simple",
              "debugMode": false,
              "visitorGreeting": ""
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
           "topicName": "Conversational Search Trial"
         }

     ]
     }
    ],

    storyNodesMeta = [
      {
        "metaData": {
          "trid": 701
        }
      },
      {
        "returnedData": [
       
          {
            "topicID": 0,
            "nodeOrder": 0,
            "nodeDisplayName": "Feed Equipment, Ingredients & Services",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "equipment",
                "skipTo": 1
              },
              {
                "resp": "ingredients",
                "skipTo": 7
              },
              {
                "resp": "facility",
                "skipTo": 13
              },
              {
                "resp": "lab",
                "skipTo": 19
              },
              {
                "resp": "misc",
                "skipTo": 22
              },
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 0
          
          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Select Feed Equipment",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "bagging",
                "skipTo": 2
              },
              {
                "resp": "bstorage",
                "skipTo": 3
              },
              {
                "resp": "control",
                "skipTo": 4
              },
              {
                "resp": "conveying",
                "skipTo": 5
              },
              {
                "resp": "drying",
                "skipTo": 6
              },
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 1
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "Select Bagging & Warehousing",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 2
          {
            "topicID": 0,
            "nodeOrder": 3,
            "nodeDisplayName": "Select Bulk Storage",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 3
          {
            "topicID": 0,
            "nodeOrder": 4,
            "nodeDisplayName": "Computer Process Control, Automation",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 4
          {
            "topicID": 0,
            "nodeOrder": 5,
            "nodeDisplayName": "Drying & Coooling",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 5
          {
            "topicID": 0,
            "nodeOrder": 6,
            "nodeDisplayName": "Conveying & Handling",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 6

          {
            "topicID": 0,
            "nodeOrder": 7,
            "nodeDisplayName": "Select Feed Ingredients",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "amino",
                "skipTo": 8
              },
              {
                "resp": "fat",
                "skipTo": 9
              },
              {
                "resp": "microbial",
                "skipTo": 10
              },
              {
                "resp": "mineral",
                "skipTo": 11
              },
              {
                "resp": "molasses",
                "skipTo": 12
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 7
          {
            "topicID": 0,
            "nodeOrder": 8,
            "nodeDisplayName": "Amino Acids",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 8
          {
            "topicID": 0,
            "nodeOrder": 9,
            "nodeDisplayName": "Fat & Oil Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 9
          {
            "topicID": 0,
            "nodeOrder": 10,
            "nodeDisplayName": "Microbial & Fermentation Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 10
          {
            "topicID": 0,
            "nodeOrder": 11,
            "nodeDisplayName": "Mineral Macro",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 11
          {
            "topicID": 0,
            "nodeOrder": 12,
            "nodeDisplayName": "Molasses Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 12
          
          {
            "topicID": 0,
            "nodeOrder": 13,
            "nodeDisplayName": "Select Facility Equipment & Supplies",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "biosecurity",
                "skipTo": 14
              },
              {
                "resp": "boiler",
                "skipTo": 15
              },
              {
                "resp": "clothing",
                "skipTo": 16
              },
              {
                "resp": "electrical",
                "skipTo": 17
              },
              {
                "resp": "pest",
                "skipTo": 18
              },
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 13
          {
            "topicID": 0,
            "nodeOrder": 14,
            "nodeDisplayName": "Biosecurity, Sanitation & Cleaning Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 14
          {
            "topicID": 0,
            "nodeOrder": 15,
            "nodeDisplayName": "Boiler & Steam Systems",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 15
          {
            "topicID": 0,
            "nodeOrder": 16,
            "nodeDisplayName": "Clothing Protective",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "skipLogicType": "jump",
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 16
          {
            "topicID": 0,
            "nodeOrder": 17,
            "nodeDisplayName": "Electrical & Alarm Systems",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 17
          {
            "topicID": 0,
            "nodeOrder": 18,
            "nodeDisplayName": "Pest Control",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 18
          
          {
            "topicID": 0,
            "nodeOrder": 19,
            "nodeDisplayName": "Select Laboratory Products & Services",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "environmental",
                "skipTo": 20
              },
              {
                "resp": "feedstuffs",
                "skipTo": 21
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 19
          {
            "topicID": 0,
            "nodeOrder": 20,
            "nodeDisplayName": "Environmental Testing",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "skipLogicType": "jump",
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 20
          {
            "topicID": 0,
            "nodeOrder": 21,
            "nodeDisplayName": "Feed & Feed Stuffs Safety",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 21
          
          {
            "topicID": 0,
            "nodeOrder": 22,
            "nodeDisplayName": "Select Feed Services",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 23
              }
            ],
            "dataPrefilled": false,
            "searchQuery": true,
            "searchContent": false,
          }, // 22
        
         // searchTile, searchContent - true
          {
            "topicID": 0,
            "nodeOrder": 23,
            "nodeDisplayName": "See Search Results",
            "nodeTemplateCategory": "searchTile",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchQuery": false,
            "searchContent": true,
          },

          {
            "topicID": 0,
            "nodeOrder": 24,
            "nodeDisplayName": "Continue Searching Directory",
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
          },

        ]
      }
    ],
      
    storyNodesInputContent = [

      {
      "topicID": 0,
      "nodeOrder": 0,
      "nodeDisplayName": "Feed Equipment, Ingredients & Services",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_0',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": true,
      "conversationBlurbs":["With just few clicks you can now search and explore our 2019 buyers guide", "Please select your primary category of interest"],
      "audioAnnotation": [],
      "nodeInputContent": [
        { "displayName": "Feed Equipment",
          "returnValue": "equipment"
        },
        { "displayName": "Feed Ingredients",
          "returnValue": "ingredients"
        },
        { "displayName": "Facility Equipment & Supplies",
          "returnValue": "facility"
        },
        { "displayName": "Laboratory Products & Services",
          "returnValue": "lab"
        },
        { "displayName": "Miscellaneous Products & Services",
          "returnValue": "misc"
        },
      ]
    }, // 0, 0 level 1, singleChoice

      {
        "topicID": 0,
        "nodeOrder": 1,
        "nodeDisplayName": "Select Feed Equipment",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_1',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Now select the type of feed equipment"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Bagging & Warehousing",
            "returnValue": "bagging"
          },
          { "displayName": "Bulk Storage",
            "returnValue": "bstorage"
          },
          { "displayName": "Computer Process Control, Automation",
            "returnValue": "control"
          },
          { "displayName": "Conveying & Handling",
            "returnValue": "conveying"
          },
          { "displayName": "Drying & Cooling",
            "returnValue": "drying"
          }


        ]
      }, // 0, 1 level 2, singleChoice
      {
          "topicID": 0,
          "nodeOrder": 2,
          "nodeDisplayName": "Select Bagging & Warehousing",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '701_0_2',
          "answerRequired": true,
          "questionType": "multipleChoice",
          "searchContent": false,
          "searchQuery": true,
          "conversationBlurbs":["Now select the bagging and warehousing products", "Select all that interest you"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Bag Conveyors, Elevators & Flatteners",
              "returnValue": "bconveyors"
            },
            { "displayName": "Bagging Scales & Wiegh Fill Equipment",
              "returnValue": "bscales"
            },
            { "displayName": "Bags, Bag Stock, Bulk Bags",
              "returnValue": "bstock"
            },
            { "displayName": "Bar Coding & Inventory Systems",
              "returnValue": "barcoding"
            },
            { "displayName": "Check Weighers & Portable Scales",
              "returnValue": "weighers"
            },
            { "displayName": "Closing, Sewing & Sealing Euipment",
              "returnValue": "sewing"
            },
            { "displayName": "Pallet Racks & Warehouse Storage",
              "returnValue": "palletracks"
            },
            { "displayName": "Pallet Wrapping Supplies & Equipment",
              "returnValue": "palletwrapping"
            },
            { "displayName": "Palletizer  Robotic",
              "returnValue": "palletizerrobotic"
            },
            { "displayName": "Palletizer  Manual",
              "returnValue": "palletizermanual"
            }


          ]
        }, // 0, 2 level 3 - feed equipment subcategories
      {
          "topicID": 0,
          "nodeOrder": 3,
          "nodeDisplayName": "Select Bulk Storage",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '701_0_3',
          "answerRequired": true,
          "questionType": "multipleChoice",
          "searchContent": false,
        "searchQuery": true,
          "conversationBlurbs":["These are the bulk storage categories in the directory", "You can select more than one"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Bin & Tank Level Volume Indicators",
              "returnValue": "bintank"
            },
            { "displayName": "Bin Discharge Augers & Live Bottom Systems",
              "returnValue": "bindischarge"
            },
            { "displayName": "Bulk Bins & Silos",
              "returnValue": "bulkbins"
            },
            { "displayName": "Microingredient Bins",
              "returnValue": "microingredient"
            },
            { "displayName": "Vibrators & Pressurized Air Discharge",
              "returnValue": "vibrators"
            }


          ]
        }, // 0, 3
      {
          "topicID": 0,
          "nodeOrder": 4,
          "nodeDisplayName": "Computer Process Control, Automation",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '701_0_4',
          "answerRequired": true,
          "questionType": "multipleChoice",
          "searchContent": false,
        "searchQuery": true,
          "conversationBlurbs":["These are process control related computer categories", "Choose more than one"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Computer Hardware & Panel Interface",
              "returnValue": "computerh"
            },
            { "displayName": "Computer Software & Automation Services",
              "returnValue": "computers"
            },
            { "displayName": "Formulation, Ration Optimization & Modeling Software",
              "returnValue": "formulation"
            },
            { "displayName": "Integrated Business Software",
              "returnValue": "integrated"
            },
            { "displayName": "Process Control Systems & Automation Software",
              "returnValue": "processcontrol"
            },
            { "displayName": "Programmable Controllers",
              "returnValue": "programmable"
            }


          ]
        }, // 0, 4
      {
          "topicID": 0,
          "nodeOrder": 5,
          "nodeDisplayName": "Drying & Coooling",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '701_0_5',
          "answerRequired": true,
          "questionType": "multipleChoice",
          "searchContent": false,
        "searchQuery": true,
          "conversationBlurbs":["Here is how we have categorised Drying and Cooling products", "Select more than one"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Extruded Product Dryers",
              "returnValue": "extruded"
            },
            { "displayName": "Grain& Feedstuff Dryers",
              "returnValue": "grain"
            },
            { "displayName": "Roasted Dryers",
              "returnValue": "roasted"
            },
            { "displayName": "Screens",
              "returnValue": "screens"
            },
            { "displayName": "Dust Control Systems",
              "returnValue": "dust"
            },
            { "displayName": "Explosion Control Devices",
              "returnValue": "explosion"
            }
          ]
        }, // 0, 5
      {
          "topicID": 0,
          "nodeOrder": 6,
          "nodeDisplayName": "Conveying & Handling",
          "nodeTemplateCategory": "closeEndedQuestion",
          "nodeContentId": '701_0_6',
          "answerRequired": true,
          "questionType": "multipleChoice",
          "searchContent": false,
        "searchQuery": true,
          "conversationBlurbs":["These are conveyours and handlers", "Pick more than one category that inteests you"],
          "audioAnnotation": [],
          "nodeInputContent": [

            { "displayName": "Airlocks",
              "returnValue": "airlocks"
            },
            { "displayName": "Bucker Elevators",
              "returnValue": "bucker"
            },
            { "displayName": "Conveyor  Parts & Supplies",
              "returnValue": "conveyorparts"
            },
            { "displayName": "Drag Conveyours",
              "returnValue": "drag"
            },
            { "displayName": "Pneumatic Conveyours",
              "returnValue": "pneumatic"
            },
            { "displayName": "Screw Conveyours",
              "returnValue": "screw"
            },
            { "displayName": "Slide Gates & Valves",
              "returnValue": "slide"
            }


          ]
        }, // 0, 6

      {
        "topicID": 0,
        "nodeOrder": 7,
        "nodeDisplayName": "Select Feed Ingredients",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_7',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Following are the feed ingredients category", "Choose a category that interest"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Amino Acids",
            "returnValue": "amino"
          },
          { "displayName": "Fat & Oil Products",
            "returnValue": "fat"
          },
          { "displayName": "Microbial & Fermentation Products",
            "returnValue": "microbial"
          },
          { "displayName": "Mineral Macro",
            "returnValue": "mineral"
          },
          { "displayName": "Molasses Products",
            "returnValue": "molasses"
          }


        ]
      }, // // 0, 7 level 2, singleChoice
      {
        "topicID": 0,
        "nodeOrder": 8,
        "nodeDisplayName": "Amino Acids",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_8',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["These are the different types of amino acids", "Choose ones that you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Lysine",
            "returnValue": "lysine"
          },
          { "displayName": "Methionine",
            "returnValue": "methionine"
          },
          { "displayName": "Taurine",
            "returnValue": "taurine"
          },
          { "displayName": "Threonine",
            "returnValue": "threonine"
          },
          { "displayName": "Other Amino Acids",
            "returnValue": "aminoacids"
          }


        ]
      }, // // 0, 8 level 3 - feed ingredient subcategories
      {
        "topicID": 0,
        "nodeOrder": 9,
        "nodeDisplayName": "Fat & Oil Products",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_9',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["And now the fat and oil product categories", "Select ones you are looking for"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Animal Fats",
            "returnValue": "animal"
          },
          { "displayName": "Marine Oils",
            "returnValue": "marine"
          },
          { "displayName": "Speciality Fat Products",
            "returnValue": "fatproducts"
          },
          { "displayName": "Vegetable Pills",
            "returnValue": "pills"
          },
          { "displayName": "Distillers Dried Grains",
            "returnValue": "grains"
          }


        ]
      }, // 0, 9
      {
        "topicID": 0,
        "nodeOrder": 10,
        "nodeDisplayName": "Microbial & Fermentation Products",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_10',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["These are Microbial & Fermentation products", "Pick ones that interest you"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Microbials - Live, Direct Fed",
            "returnValue": "microbials"
          },
          { "displayName": "Live Yeast",
            "returnValue": "yeast"
          },
          { "displayName": "Yeast Cultures",
            "returnValue": "cultures"
          },
          { "displayName": "Milk Replacers",
            "returnValue": "milk"
          }

        ]
      }, // 0, 10
      {
        "topicID": 0,
        "nodeOrder": 11,
        "nodeDisplayName": "Mineral Macro",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_11',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Here are the Mineral macros", "Select types that interest you"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Calcium",
            "returnValue": "calcium"
          },
          { "displayName": "Copper",
            "returnValue": "copper"
          },
          { "displayName": "Iodine",
            "returnValue": "iodine"
          },
          { "displayName": "Iron",
            "returnValue": "iron"
          },
          { "displayName": "Manganese",
            "returnValue": "manganese"
          }


        ]
      }, // 0, 11
      {
        "topicID": 0,
        "nodeOrder": 12,
        "nodeDisplayName": "Molasses Products",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_12',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Select the molasses products of interest"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Molasses Dry",
            "returnValue": "molassesdry"
          },
          { "displayName": "Molasses Products",
            "returnValue": "molassesproducts"
          }


        ]
      }, // 0, 12

      {
        "topicID": 0,
        "nodeOrder": 13,
        "nodeDisplayName": "Select Facility Equipment & Supplies",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_13',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Select the facility equipment category you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Biosecurity, Sanitation & Cleaning Products",
            "returnValue": "biosecurity"
          },
          { "displayName": "Boiler & Steam Systems",
            "returnValue": "boiler"
          },
          { "displayName": "Clothing Protective",
            "returnValue": "clothing"
          },
          { "displayName": "Electrical & Alarm Systems",
            "returnValue": "electrical"
          },
          { "displayName": "Pest Control",
            "returnValue": "pest"
          }


        ]
      }, // 0, 13 // level 2, singleChoice
      {
        "topicID": 0,
        "nodeOrder": 14,
        "nodeDisplayName": "Biosecurity, Sanitation & Cleaning Products",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_14',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Following are the Biosecurity, Sanitation categories", "Choose ones you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Boot Cleaners",
            "returnValue": "boot"
          },
          { "displayName": "Cleaning Chemicals",
            "returnValue": "chemicals"
          },
          { "displayName": "Disinfectants",
            "returnValue": "disinfectants"
          },
          { "displayName": "Sprayers",
            "returnValue": "sprayers"
          },
          { "displayName": "Fumigation Products",
            "returnValue": "fumigation"
          }


        ]
      }, // 0, 14 // level 3 - facility equipment subcategories
      {
        "topicID": 0,
        "nodeOrder": 15,
        "nodeDisplayName": "Boiler & Steam Systems",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_15',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["These are the Boiler & Steam Systems", "Choose ones you want to explore"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Boiler Steam Systems",
            "returnValue": "boilersteam"
          },
          { "displayName": "Steam Generators",
            "returnValue": "steamg"
          },
          { "displayName": "Steam Valves",
            "returnValue": "steamv"
          },
          { "displayName": "Water Treatments",
            "returnValue": "watert"
          },
          { "displayName": "Direct Fire Steam Generators",
            "returnValue": "fire"
          }


        ]
      }, // 0, 15
      {
        "topicID": 0,
        "nodeOrder": 16,
        "nodeDisplayName": "Clothing Protective",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_16',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Select the protective clothing you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Footwear",
            "returnValue": "footwear"
          },
          { "displayName": "Gloves",
            "returnValue": "gloves"
          },
          { "displayName": "Masks & Goggles",
            "returnValue": "masks"
          },
          { "displayName": "Uniforms & Hats",
            "returnValue": "uniforms"
          }
        ]
      },// 0, 16
      {
        "topicID": 0,
        "nodeOrder": 17,
        "nodeDisplayName": "Electrical & Alarm Systems",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_17',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Select the electrical & alarm systems you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Alarm Devices",
            "returnValue": "alarm"
          },
          { "displayName": "Bearing Heat Detectors",
            "returnValue": "bearing"
          },
          { "displayName": "Belt Alignment Wear Detectors",
            "returnValue": "belt"
          },
          { "displayName": "Generators",
            "returnValue": "generators"
          },
          { "displayName": "Motors & Motor Parts",
            "returnValue": "motors"
          }


        ]
      }, // 0, 17
      {
        "topicID": 0,
        "nodeOrder": 18,
        "nodeDisplayName": "Pest Control",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_18',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Here are the pest control categories", "Choose all that interests you"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Insect Traps & Baits",
            "returnValue": "insect"
          },
          { "displayName": "Ingredient Pest Management",
            "returnValue": "ingredientpest"
          },
          { "displayName": "Rodent Traps & Bait",
            "returnValue": "rodent"
          }


        ]
      }, // 0, 18

      {
        "topicID": 0,
        "nodeOrder": 19,
        "nodeDisplayName": "Select Laboratory Products & Services",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_19',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Here are Laboratory Products & Services in the directory", "Choose ones you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Environmental Testing",
            "returnValue": "environmental"
          },
          { "displayName": "Feed & Feed Stuffs Safety",
            "returnValue": "feedstuffs"
          }


        ]
      }, // // 0, 19 level 2
      {
        "topicID": 0,
        "nodeOrder": 20,
        "nodeDisplayName": "Environmental Testing",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_20',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Select the environmental testing products of interest"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Effluent Analysis",
            "returnValue": "effluent"
          },
          { "displayName": "Pesticides Testing",
            "returnValue": "pesticides"
          },
          { "displayName": "Water Quality Testing",
            "returnValue": "waterquality"
          }

        ]
      }, // // 0, 20 level 3 - lab products
      {
        "topicID": 0,
        "nodeOrder": 21,
        "nodeDisplayName": "Feed & Feed Stuffs Safety",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_21',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Pick the feed and feed stuffs safety products"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Chemical Assays",
            "returnValue": "assays"
          },
          { "displayName": "Online Air Calibrations",
            "returnValue": "online"
          },
          { "displayName": "Protein Quality Testing",
            "returnValue": "protein"
          },
          { "displayName": "Wet Chemistry Systems",
            "returnValue": "chemistry"
          },
          { "displayName": "Near Infrared Analytical Systems",
            "returnValue": "infrared"
          }


        ]
      }, // 0, 21

      {
        "topicID": 0,
        "nodeOrder": 22,
        "nodeDisplayName": "Select Feed Services",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '701_0_22',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": true,
        "conversationBlurbs":["Choose all feed services suppliers you want to search"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Associatons",
            "returnValue": "associatons"
          },
          { "displayName": "Construction Services",
            "returnValue": "constructiond"
          },
          { "displayName": "Construction Design & Build",
            "returnValue": "constructiond"
          },
          { "displayName": "Constructon General Contract",
            "returnValue": "constructong"
          },
          { "displayName": "Consultants Engineering & Design",
            "returnValue": "consultants"
          },


        ]
      }, // // 0, 22 level 2, only one category in level 2 - hence no level 3

      {
        "topicID": 0,
        "nodeOrder": 23,
        "nodeDisplayName": "Your Search Results",
        "nodeTemplateCategory":  "searchTile",
        "searchContent": true,
        "searchQuery": false,
        "nodeContentId": '701_0_23',
        "conversationBlurbs":["So here are the suppliers we found for you", "Just slide each supplier profile ","By the way if you click on select I will remember your selection", "And send you an email with a summary of your selections"],
        "audioAnnotation": [],
        "nodeInputContent": [


        ]
      }, // 0, 23

      {
        "topicID": 0,
        "nodeOrder": 24,
        "nodeDisplayName": "Continue Searching Directory",
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "nodeContentId": '701_0_24',
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
      }, // 0, 24


  ];

    storyNodesOutputContent = [

    {
      "topicID": 0,
      "nodeOrder": 0,
      "nodeDisplayName": "Feed Equipment, Ingredients & Services",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_0',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Just a few more questions and we are done. i promise", "Please select your primary industry"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q1_sc",
          "label": "Feed Equipment",
          "value": "equipment",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_sc",
          "label": "Feed Ingredients",
          "value": "ingredients",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_sc",
          "label": "Facility Equipment & Supplies",
          "value": "facility",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_sc",
          "label": "Laboratory Products & Services",
          "value": "lab",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_sc",
          "label": "Miscellaneous Products & Services",
          "value": "misc",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 0 level 1, singleChoice

    {
      "topicID": 0,
      "nodeOrder": 1,
      "nodeDisplayName": "Select Feed Equipment",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_1',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q2_sc",
          "label": "Bagging & Warehousing",
          "value": "bagging",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_sc",
          "label": "Bulk Storage",
          "value": "bstorage",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_sc",
          "label": "Computer Process Control, Automation",
          "value": "control",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_sc",
          "label": "Conveying & Handling",
          "value": "conveying",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_sc",
          "label": "Drying & Cooling",
          "value": "drying",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 1 level 2, singleChoice
    {
      "topicID": 0,
      "nodeOrder": 2,
      "nodeDisplayName": "Select Bagging & Warehousing",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_2',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Bag Conveyors, Elevators & Flatteners",
          "value": "bconveyors",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Bagging Scales & Wiegh Fill Equipment",
          "value": "bscales",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Bags, Bag Stock, Bulk Bags",
          "value": "bstock",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Bar Coding & Inventory Systems",
          "value": "barcoding",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Check Weighers & Portable Scales",
          "value": "weighers",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Closing, Sewing & Sealing Euipment",
          "value": "sewing",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Pallet Racks & Warehouse Storage",
          "value": "palletracks",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Pallet Wrapping Supplies & Equipment",
          "value": "palletwrapping",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Palletizer  Robotic",
          "value": "palletizerrobotic",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q1_mc_",
          "label": "Palletizer  Manual",
          "value": "palletizermanual",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 2 level 3 - feed equipment subcategories
    {
      "topicID": 0,
      "nodeOrder": 3,
      "nodeDisplayName": "Select Bulk Storage",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_3',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q2_mc_",
          "label": "Bin & Tank Level Volume Indicators",
          "value": "bintank",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_mc_",
          "label": "Bin Discharge Augers & Live Bottom Systems",
          "value": "bindischarge",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_mc_",
          "label": "Bulk Bins & Silos",
          "value": "bulkbins",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_mc_",
          "label": "Microingredient Bins",
          "value": "microingredient",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q2_mc_",
          "label": "Vibrators & Pressurized Air Discharge",
          "value": "vibrators",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 3
    {
      "topicID": 0,
      "nodeOrder": 4,
      "nodeDisplayName": "Computer Process Control, Automation",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_4',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q3_mc_",
          "label": "Computer Hardware & Panel Interface",
          "value": "computerh",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_mc_",
          "label": "Computer Software & Automation Services",
          "value": "computers",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_mc_",
          "label": "Formulation, Ration Optimization & Modeling Software",
          "value": "formulation",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_mc_",
          "label": "Integrated Business Software",
          "value": "integrated",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_mc_",
          "label": "Process Control Systems & Automation Software",
          "value": "processcontrol",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_mc_",
          "label": "Programmable Controllers",
          "value": "programmable",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 4
    {
      "topicID": 0,
      "nodeOrder": 5,
      "nodeDisplayName": "Drying & Coooling",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_5',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q4_mc_",
          "label": "Extruded Product Dryers",
          "value": "extruded",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_mc_",
          "label": "Grain& Feedstuff Dryers",
          "value": "grain",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_mc_",
          "label": "Roasted Dryers",
          "value": "roasted",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_mc_",
          "label": "Screens",
          "value": "screens",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_mc_",
          "label": "Dust Control Systems",
          "value": "dust",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_mc_",
          "label": "Explosion Control Devices",
          "value": "explosion",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 5
    {
      "topicID": 0,
      "nodeOrder": 6,
      "nodeDisplayName": "Conveying & Handling",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_6',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Airlocks",
          "value": "airlocks",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Bucker Elevators",
          "value": "bucker",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Conveyor  Parts & Supplies",
          "value": "conveyorparts",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Drag Conveyours",
          "value": "drag",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Pneumatic Conveyours",
          "value": "pneumatic",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Screw Conveyours",
          "value": "screw",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_mc_",
          "label": "Slide Gates & Valves",
          "value": "slide",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 6

    {
      "topicID": 0,
      "nodeOrder": 7,
      "nodeDisplayName": "Select Feed Ingredients",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_7',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q3_sc",
          "label": "Amino Acids",
          "value": "amino",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_sc",
          "label": "Fat & Oil Products",
          "value": "fat",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_sc",
          "label": "Microbial & Fermentation Products",
          "value": "microbial",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_sc",
          "label": "Mineral Macro",
          "value": "mineral",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q3_sc",
          "label": "Molasses Products",
          "value": "molasses",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // // 0, 7 level 2, singleChoice
    {
      "topicID": 0,
      "nodeOrder": 8,
      "nodeDisplayName": "Amino Acids",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_8',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q6_mc_",
          "label": "Lysine",
          "value": "lysine",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q6_mc_",
          "label": "Methionine",
          "value": "methionine",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q6_mc_",
          "label": "Taurine",
          "value": "taurine",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q6_mc_",
          "label": "Threonine",
          "value": "threonine",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q6_mc_",
          "label": "Other Amino Acids",
          "value": "aminoacids",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // // 0, 8 level 3 - feed ingredient subcategories
    {
      "topicID": 0,
      "nodeOrder": 9,
      "nodeDisplayName": "Fat & Oil Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_9',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q7_mc_",
          "label": "Animal Fats",
          "value": "animal",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q7_mc_",
          "label": "Marine Oils",
          "value": "marine",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q7_mc_",
          "label": "Speciality Fat Products",
          "value": "fatproducts",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q7_mc_",
          "label": "Vegetable Pills",
          "value": "pills",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q7_mc_",
          "label": "Distillers Dried Grains",
          "value": "grains",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 9
    {
      "topicID": 0,
      "nodeOrder": 10,
      "nodeDisplayName": "Microbial & Fermentation Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_10',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q8_mc_",
          "label": "Microbials - Live, Direct Fed",
          "value": "microbials",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q8_mc_",
          "label": "Live Yeast",
          "value": "yeast",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q8_mc_",
          "label": "Yeast Cultures",
          "value": "cultures",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q8_mc_",
          "label": "Milk Replacers",
          "value": "milk",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 10
    {
      "topicID": 0,
      "nodeOrder": 11,
      "nodeDisplayName": "Mineral Macro",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_11',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q9_mc_",
          "label": "Calcium",
          "value": "calcium",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q9_mc_",
          "label": "Copper",
          "value": "copper",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q9_mc_",
          "label": "Iodine",
          "value": "iodine",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q9_mc_",
          "label": "Iron",
          "value": "iron",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q9_mc_",
          "label": "Manganese",
          "value": "manganese",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 11
    {
      "topicID": 0,
      "nodeOrder": 12,
      "nodeDisplayName": "Molasses Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_12',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q10_mc_",
          "label": "Molasses Dry",
          "value": "molassesdry",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q10_mc_",
          "label": "Molasses Products",
          "value": "molassesproducts",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 12

    {
      "topicID": 0,
      "nodeOrder": 13,
      "nodeDisplayName": "Select Facility Equipment & Supplies",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_13',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q4_sc",
          "label": "Biosecurity, Sanitation & Cleaning Products",
          "value": "biosecurity",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_sc",
          "label": "Boiler & Steam Systems",
          "value": "boiler",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_sc",
          "label": "Clothing Protective",
          "value": "clothing",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_sc",
          "label": "Electrical & Alarm Systems",
          "value": "electrical",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q4_sc",
          "label": "Pest Control",
          "value": "pest",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 13 // level 2, singleChoice

    {
      "topicID": 0,
      "nodeOrder": 14,
      "nodeDisplayName": "Biosecurity, Sanitation & Cleaning Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_14',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q11_mc_",
          "label": "Boot Cleaners",
          "value": "boot",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q11_mc_",
          "label": "Cleaning Chemicals",
          "value": "chemicals",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q11_mc_",
          "label": "Disinfectants",
          "value": "disinfectants",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q11_mc_",
          "label": "Sprayers",
          "value": "sprayers",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q11_mc_",
          "label": "Fumigation Products",
          "value": "fumigation",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 14 // level 3 - facility equipment subcategories

    {
      "topicID": 0,
      "nodeOrder": 15,
      "nodeDisplayName": "Boiler & Steam Systems",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_15',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q12_mc_",
          "label": "Boiler Steam Systems",
          "value": "boilersteam",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q12_mc_",
          "label": "Steam Generators",
          "value": "steamg",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q12_mc_",
          "label": "Steam Valves",
          "value": "steamv",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q12_mc_",
          "label": "Water Treatments",
          "value": "watert",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q12_mc_",
          "label": "Direct Fire Steam Generators",
          "value": "fire",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 15
    {
      "topicID": 0,
      "nodeOrder": 16,
      "nodeDisplayName": "Clothing Protective",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_16',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q13_mc_",
          "label": "Footwear",
          "value": "footwear",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q13_mc_",
          "label": "Gloves",
          "value": "gloves",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q13_mc_",
          "label": "Masks & Goggles",
          "value": "masks",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q13_mc_",
          "label": "Uniforms & Hats",
          "value": "uniforms",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    },// 0, 16
    {
      "topicID": 0,
      "nodeOrder": 17,
      "nodeDisplayName": "Electrical & Alarm Systems",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_17',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q14_mc_",
          "label": "Alarm Devices",
          "value": "alarm",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q14_mc_",
          "label": "Bearing Heat Detectors",
          "value": "bearing",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q14_mc_",
          "label": "Belt Alignment Wear Detectors",
          "value": "belt",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q14_mc_",
          "label": "Generators",
          "value": "generators",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q14_mc_",
          "label": "Motors & Motor Parts",
          "value": "motors",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 17
    {
      "topicID": 0,
      "nodeOrder": 18,
      "nodeDisplayName": "Pest Control",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_18',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q15_mc_",
          "label": "Insect Traps & Baits",
          "value": "insect",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q15_mc_",
          "label": "Ingredient Pest Management",
          "value": "ingredientpest",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q15_mc_",
          "label": "Rodent Traps & Bait",
          "value": "rodent",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 18

    {
      "topicID": 0,
      "nodeOrder": 19,
      "nodeDisplayName": "Select Laboratory Products & Services",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_19',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q5_sc",
          "label": "Environmental Testing",
          "value": "environmental",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q5_sc",
          "label": "Feed & Feed Stuffs Safety",
          "value": "feedstuffs",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // // 0, 19 level 2
    {
      "topicID": 0,
      "nodeOrder": 20,
      "nodeDisplayName": "Environmental Testing",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_20',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q16_mc_",
          "label": "Effluent Analysis",
          "value": "effluent",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q16_mc_",
          "label": "Pesticides Testing",
          "value": "pesticides",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q16_mc_",
          "label": "Water Quality Testing",
          "value": "waterquality",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // // 0, 20 level 3 - lab products
    {
      "topicID": 0,
      "nodeOrder": 21,
      "nodeDisplayName": "Feed & Feed Stuffs Safety",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_21',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q17_mc_",
          "label": "Chemical Assays",
          "value": "assays",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q17_mc_",
          "label": "Online Air Calibrations",
          "value": "online",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q17_mc_",
          "label": "Protein Quality Testing",
          "value": "protein",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q17_mc_",
          "label": "Wet Chemistry Systems",
          "value": "chemistry",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q17_mc_",
          "label": "Near Infrared Analytical Systems",
          "value": "infrared",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // 0, 21

    {
      "topicID": 0,
      "nodeOrder": 22,
      "nodeDisplayName": "Select Feed Services",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '701_0_22',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeOutputContent": [[{
        "da_ddf": {
          "name": "q18_mc_",
          "label": "Associatons",
          "value": "associatons",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q18_mc_",
          "label": "Construction Services",
          "value": "constructiond",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q18_mc_",
          "label": "Construction Design & Build",
          "value": "constructiond",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q18_mc_",
          "label": "Constructon General Contract",
          "value": "constructong",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}], [{
        "da_ddf": {
          "name": "q18_mc_",
          "label": "Consultants Engineering & Design",
          "value": "consultants",
          "required": true,
          "valueType": ""
        }
      }, {"da_meob": {"da_obseg": [], "da_disob": true}}]]
    }, // // 0, 22 level 2, only one category in level 2 - hence no level 3

    {
      "topicID": 0,
      "nodeOrder": 23,
      "nodeDisplayName": "Your Search Results",
      "nodeTemplateCategory":  "searchTile",
      "searchContent": true,
      "searchQuery": false,
      "nodeContentId": '701_0_23',
      "conversationBlurbs":[],
      "audioAnnotation": [],
      "nodeOutputContent": [


      ]
    }, // 0, 23

    {
        "topicID": 0,
        "nodeOrder": 24,
        "nodeDisplayName": "Continue Searching Directory",
        "nodeTemplateCategory": "closeEndedQuestion",
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "nodeContentId": '701_0_24',
        "conversationBlurbs":["Would you like to continue searching the directory"],
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
      }, // 0, 24
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
          "all",
          "email",
          "textMsg",
          "direct"
        ],
        "pageType": "website",
        "device": [
          "mobile",
          "tablet",
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

    // no need for conversion goal since it is use case id 1;


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



