

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

    $("#endPublishing").click(endPublishing);

    var
    trackingID= 534,
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
            "searchType": null,
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
              "ncnt": "18",
              "campaignName": "PMMI Survey",
              "conversationInitiationMode": "PA-1",
              "webproperty": "bs-local.com",
              "searchType": null,
              "campaignType": "simple",
              "debugMode": true,
              "visitorGreeting": "Hi! We have terrific content for packaging industry professionals. Subscription is free!. It takes less than a minute. I promise"
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
           "topicName": "PMMI 2 Year Renewal Survey"
         }

     ]
     }
    ],

    storyNodesMeta = [
      {
        "metaData": {
          "trid": 534
        }
      },
      {
        "returnedData": [
          {
            "topicID": 0,
            "nodeOrder": 0,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "yes",
                "skipTo": 1
              },
              {
                "resp": "no",
                "skipTo": 17
              }
            ],
            "dataPrefilled": true,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Name, Business Title & Corporate Address",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "Your Business Contacts",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 3,
            "nodeDisplayName": "Your Organization Address",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 4,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "yes",
                "skipTo": 6
              },
              {
                "resp": "no",
                "skipTo": 5
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 5,
            "nodeDisplayName": "Your Organization Address",
            "nodeTemplateCategory": "contactDataCollector",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 6,
            "nodeDisplayName": "Primary Product Category of Your Business",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "foodBeverage",
                "skipTo": 7
              },
              {
                "resp": "healthcare",
                "skipTo": 8
              },
              {
                "resp": "household",
                "skipTo": 9
              },
              {
                "resp": "cosmetics",
                "skipTo": 10
              },
              {
                "resp": "suppliers",
                "skipTo": 11
              },
              {
                "resp": "otherPackaged",
                "skipTo": 14
              },
              {
                "resp": "dnq",
                "skipTo": 12
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 7,
            "nodeDisplayName": "Food Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 13
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 8,
            "nodeDisplayName": "Healthcare Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 9,
            "nodeDisplayName": "Household & Automotive Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 10,
            "nodeDisplayName": "Other Packaged Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 11,
            "nodeDisplayName": "Packaging Supplier Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 12,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 13,
            "nodeDisplayName": "Beverage Products",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 14
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 14,
            "nodeDisplayName": "Your Job Responsibility",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 15,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          },
          {
            "topicID": 0,
            "nodeOrder": 16,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //[{"skipTo": "https://www.google.com"}] -if you want to skip to new page; else temlateCategory is "terminateConversation"
          {
            "topicID": 0,
            "nodeOrder": 17,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }
        ]
      }
    ],


   // termination mode can be "exitOnNewPage", exitOnCurrentPage, exitWithWithoutMessage
   // if exitOnNewPage then skipto for skipType end should have the url;


    storyNodesInputContent = [

    {
      "topicID": 0,
      "nodeOrder": 0,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_0', // tracking id, topic id, node id
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Hi","All I need are answers to a few Qs", "So that we can send a free copy of Packaging World - a magzine for professionals in Packaging Industry", "Please confirm that you would like to receive Packaging World"],
      "audioAnnotation": [],
      "nodeInputContent": [
        { "displayName": "Yes",
          "returnValue": "yes"
        },
        { "displayName": "No",
          "returnValue": "no"
        }
      ]
    },
    {
      "topicID": 0,
      "nodeOrder": 1,
      "nodeDisplayName": "Your Name, Business Title & Company",
      "nodeContentId": '534_0_1',
      "nodeTemplateCategory": "contactDataCollector",
      "answerRequired": true,
      "conversationBlurbs":["We have your company name & tile as shown below", "Please confirm if there are errors"],
      "audioAnnotation": [],
      "nodeInputContent": [

        {
          "fieldName": "firstName",
          "required": true,
          "label": "First Name"
        },
        {
          "fieldName": "lastName",
          "required": true,
          "label": "Last Name"
        },
        {
          "fieldName": "businessTitle",
          "required": true,
          "label": "Business Title"
        },
        {
          "fieldName": "company",
          "required": true,
          "label": "Company"
        }

      ]
    },
    {
      "topicID": 0,
      "nodeOrder": 2,
      "nodeDisplayName": "Your Email & Phone Number",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_2',
      "answerRequired": true,
      "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
      "audioAnnotation": [],
      "nodeInputContent": [

        {
          "fieldName": "phone",
          "required": true,
          "label": "Phone Number"
        },
        {
          "fieldName": "email",
          "required": true,
          "label": "Email Address"
        }]
    },
    {
      "topicID": 0,
      "nodeOrder": 3,
      "nodeDisplayName": "Your Organization Address",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_3',
      "answerRequired": true,
      "conversationBlurbs":["Now your business address", "Please change if it is not correct"],
      "audioAnnotation": [],
      "nodeInputContent": [

        {
          "fieldName": "streetAddress1",
          "required": true,
          "label": "Street Address 1"
        },
        {
          "fieldName": "streetAddress2",
          "required": false,
          "label": "Street Address 2"
        },
        {
          "fieldName": "city",
          "required": true,
          "label": "City"
        },
        {
          "fieldName": "state",
          "required": true,
          "label": "State"
        },
        {
          "fieldName": "zipCode",
          "required": true,
          "label": "Zip Code"
        }
       ]
    },
    {
      "topicID": 0,
      "nodeOrder": 4,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_4',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["One quick thing I am hoping the address you provided is business adddress. Right?", "Please confirm"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Yes",
          "returnValue": "yes"
        },
        { "displayName": "No",
          "returnValue": "no"
        }
        ]
    },
    {
      "topicID": 0,
      "nodeOrder": 5,
      "nodeDisplayName": "Your Business Address",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_5',
      "answerRequired": true,
      "conversationBlurbs":["Oops!", "They want me to get your business address", "I know I am being a pain. Please enter your business address"],
      "audioAnnotation": [],
      "nodeInputContent": [
        {
          "fieldName": "streetAddress1",
          "required": true,
          "label": "Street Address 1"
        },
        {
          "fieldName": "streetAddress2",
          "required": false,
          "label": "Street Address 2"
        },
        {
          "fieldName": "city",
          "required": true,
          "label": "City"
        },
        {
          "fieldName": "state",
          "required": true,
          "label": "State"
        },
        {
          "fieldName": "zipCode",
          "required": true,
          "label": "Zip Code"
        }

       ]
    },
    {
      "topicID": 0,
      "nodeOrder": 6,
      "nodeDisplayName": "Primary Industry or Product Category",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_6',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Just a few more questions and we are done. i promise", "Please select your primary industry"],
      "audioAnnotation": [],
      "nodeInputContent": [
        { "displayName": "Food & Beverage Mfg.",
          "returnValue": "foodBeverage"
        },
        { "displayName": "Healthcare Products",
          "returnValue": "healthcare"
        },
        { "displayName": "Household & Automotive",
          "returnValue": "household"
        },
        { "displayName": "Cosmetics & Personal Care",
          "returnValue": "cosmetics"
        },
        { "displayName": "Packaging & Processing Supplier",
          "returnValue": "suppliers"
        },
        { "displayName": "Other Packaged Goods",
          "returnValue": "otherPackaged"
        },
        { "displayName": "Don't Know",
          "returnValue": "dnq"
        },
        ]
    },
    {
      "topicID": 0,
      "nodeOrder": 7,
      "nodeDisplayName": "Food Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_7',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Bakery & Snack",
          "returnValue": "bakerySnack"
        },
        { "displayName": "Cereals, Breakfast Foods",
          "returnValue": "cerealsBreakfast"
        },
        { "displayName": "Confection & Candy",
          "returnValue": "confectionCandy"
        },
        { "displayName": "dairy",
          "returnValue": "Dairy"
        },
        { "displayName": "Fruits, Vegetables",
          "returnValue": "fruits"
        },
        { "displayName": "Grains, Seeds, Beans, Flour",
          "returnValue": "grains"
        },
        { "displayName": "Meat, Poultry, Seafood",
          "returnValue": "meat"
        },
        { "displayName": "Pet Food, Pet Care",
          "returnValue": "petFood"
        },
        { "displayName": "Prepared Foods",
          "returnValue": "preparedFoods"
        },
        { "displayName": "Soups, Spices, etc",
          "returnValue": "soups"
        },
        { "displayName": "Frozen, Refrigerated Foods",
          "returnValue": "frozenFoods"
        },
        { "displayName": "Nutraceutical, Vitamin, Supplement",
          "returnValue": "vitamin"
        },
        { "displayName": "Other",
          "returnValue": "other"
        }

]
    },
    {
      "topicID": 0,
      "nodeOrder": 8,
      "nodeDisplayName": "Healthcare Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_8',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Health Care product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Cannabis Products",
          "returnValue": "cannabis"
        },
        { "displayName": "Over the Counter Products",
          "returnValue": "OTC"
        },
        { "displayName": "Nutraceutical, Vitamin, Dietary Supplement",
          "returnValue": "nutraceutical"
        },
        { "displayName": "Medical, Dental Instruments or Supplies",
          "returnValue": "medicalSupplies"
        },
        { "displayName": "Medical Devices",
          "returnValue": "medicaldevices"
        },
        { "displayName": "Biological, Biopharmaceutical",
          "returnValue": "biopharmaceutical"
        },
        { "displayName": "Pharmaceutical",
          "returnValue": "pharmaceutical"
        },
        { "displayName": "Contract Manufacturing Org – Pharma,Biopharma",
          "returnValue": "contractManufacturing"
        },
        { "displayName": "Other healthcare products",
          "returnValue": "otherHealthcare"
        }]
    },
    {
      "topicID": 0,
      "nodeOrder": 9,
      "nodeDisplayName": "Household Automotive Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_9',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Household & Automotive product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Tissues & Paper Towels",
          "returnValue": "tissues"
        },
        { "displayName": "Household & Auto Chemicals",
          "returnValue": "chemicals"
        },
        { "displayName": "Detergent & Cleaners",
          "returnValue": "detergents"
        },
        { "displayName": "Other Household",
          "returnValue": "other"
        },
        { "displayName": "Other Automotive",
          "returnValue": "other"
        }

   ]
    },
    {
      "topicID": 0,
      "nodeOrder": 10,
      "nodeDisplayName": "Other Packaged Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_10',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Other Packaged product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeInputContent": [
        { "displayName": "Texttiles, Apparel, Footwear",
          "returnValue": "textilesapparel"
        },
        { "displayName": "Pet Food and Pet Care",
          "returnValue": "petfood"
        },
        { "displayName": "Paper & Printing",
          "returnValue": "paper"
        },
        { "displayName": "Tobacco & Smoking Products",
          "returnValue": "tobacco"
        },
        { "displayName": "Toys, Sports, Crafts",
          "returnValue": "toys"
        },
        { "displayName": "Hardware & Tools",
          "returnValue": "hardware"
        },
        { "displayName": "Consumer Electronics & Appliances",
          "returnValue": "consumerelectronics"
        },
        { "displayName": "Chemical",
          "returnValue": "chemical"
        },
        { "displayName": "Cannabis Products",
          "returnValue": "cannabis"
        },
        { "displayName": "Building, Construction, Home Improvement",
          "returnValue": "homeimprovement"
        },
        { "displayName": "Warehouse & Distribution",
          "returnValue": "distribution"
        },
        { "displayName": "Other Packaged Products",
          "returnValue": "other"
        }]
    },
    {
      "topicID": 0,
      "nodeOrder": 11,
      "nodeDisplayName": "Packaging Supplier Categories",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_11',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Packaging Supplier categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Converter",
          "returnValue": "converter"
        },
        { "displayName": "Line Integration",
          "returnValue": "lineintegration"
        },
        { "displayName": "Raw Materials( Film, Board, Relish Etc) ",
          "returnValue": "rawmaterials"
        },
        { "displayName": "Container, Closure Manufacturer",
          "returnValue": "containermanufacturer"
        },
        { "displayName": "Packaging Distributor",
          "returnValue": "distributor"
        },
        { "displayName": "Controls & Machine Components",
          "returnValue": "controls"
        },
        { "displayName": "Packaging Design Firm",
          "returnValue": "designfirm"
        },
        { "displayName": "Packaging Machinery",
          "returnValue": "machinery"
        },
        { "displayName": "Consulting Services",
          "returnValue": "consulting"
        },
        { "displayName": "Don't Know",
          "returnValue": "dnq"
        },

        ]
    },
    {
      "topicID": 0,
      "nodeOrder": 12,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "terminateConversation",
      "nodeContentId": '534_0_12',
      "terminationMode": 'exitOnCurrentPage',
      "conversationBlurbs":[],
      "audioAnnotation": [],
      "nodeInputContent": [
        {
          "exitMessage": ["I am sorry looks like you do not qualify for this magazine", "We send this magazine to only folks in the Packaging Industry", "Good Bye Now!"],
        }
       ]
    },
    {
      "topicID": 0,
      "nodeOrder": 13,
      "nodeDisplayName": "Beverage Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_13',
      "answerRequired": true,
      "questionType": "multipleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Spirits",
          "returnValue": "spirits"
        },
        { "displayName": "Soft Drinks",
          "returnValue": "softDrinks"
        },
        { "displayName": "Powdered Beverages",
          "returnValue": "powdered Beverages"
        },
        { "displayName": "Juice",
          "returnValue": "dairy"
        },
        { "displayName": "Dairy, Non Alcoholic",
          "returnValue": "dairy"
        },
        { "displayName": "Drinks, Nonalcoholic (energy, sport, etc.)",
          "returnValue": "drinks"
        },
        { "displayName": "Coffee",
          "returnValue": "coffee"
        },
        { "displayName": "Beer",
          "returnValue": "beer"
        },

        { "displayName": "Tea",
          "returnValue": "tea"
        },
        { "displayName": "Water",
          "returnValue": "water"
        },
        { "displayName": "Wine",
          "returnValue": "wine"
        },
        { "displayName": "Other Beverage",
          "returnValue": "otherBeverage"
        }

      ]
    },
    {
      "topicID": 0,
      "nodeOrder": 14,
      "nodeDisplayName": "Your Job Responsibility",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_14',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["We are almost done", "What's your current job responsibility"],
      "audioAnnotation": [],
      "nodeInputContent": [
        { "displayName": "Regulatory Affairs, Validation, Compliance",
          "returnValue": "regulatoryAffairs"
        },
        { "displayName": "Logistics, Supply Chain Management",
          "returnValue": "logistics"
        },
        { "displayName": "CEO, Gen Mgr. & Other Senior Mgmt",
          "returnValue": "CXO"
        },
        { "displayName": "Plant Management",
          "returnValue": "plant"
        },
        { "displayName": "Engineering",
          "returnValue": "engineering"
        },
        { "displayName": "Contract Manufacturers",
          "returnValue": "cmanufacturers"
        },
        { "displayName": "Production, Operations, Quality",
          "returnValue": "operations"
        },
        { "displayName": "packageDesign",
          "returnValue": "Package Design or Development & Brand Management"
        },
        { "displayName": "Procurement",
          "returnValue": "procurement"
        },
        { "displayName": "Sales",
          "returnValue": "sales"
        },
        { "displayName": "Other",
          "returnValue": "other"
        }]
    },
    {
      "topicID": 0,
      "nodeOrder": 15,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_15',
      "answerRequired": true,
      "questionType": "singleChoice",
      "searchContent": false,
      "searchQuery": false,
      "conversationBlurbs":["One final question I am supposed to ask you", "Would it be ok with you if in future","We texted you with mgazine renewal reminders","I promise we wont spam"],
      "audioAnnotation": [],
      "nodeInputContent": [

        { "displayName": "Yes",
          "returnValue": "yes"
        },
        { "displayName": "No",
          "returnValue": "no"
        },
      ]
    },
    {
      "topicID": 0,
      "nodeOrder": 16,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "terminateConversation",
      "nodeContentId": '534_0_16',
      "terminationMode": 'exitOnCurrentPage',
      "conversationBlurbs":[],
      "audioAnnotation": [],
      "nodeInputContent": [
        {
          "exitMessage": ["Thank you so much!!", "I hope you like the magazine", "Good Bye Now!"],
        }
      ]
    },
    {
      "topicID": 0,
      "nodeOrder": 17,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "terminateConversation",
      "nodeContentId": '534_0_17',
      "terminationMode": 'goBackToStart',
      "conversationBlurbs":[],
      "audioAnnotation": [],
      "nodeInputContent": [
        {
          "exitMessage": ["Well I am sorry to hear that", "You are not interested in our publication", "Looks like I did not do a good job to convince you","Good Bye Now!"],
        }

     ]
    },
  ];

    // temporary only to simulate json bender
    storyNodesOutputContent = [

    {
      "topicID": 0,
      "nodeOrder": 0,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_0',
      "conversationBlurbs":["Hi","All I need are answers to a few Qs", "So that we can send a free copy of Packaging World - a magzine for professionals in Packaging Industry", "Please confirm that you would like to receive Packaging World"],
      "nodeOutputContent": [  [{
        "da_ddf": {
          "value": "yes",
          "valueType": "", // this is css related stuff; ok for now;
          "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
          "label": "Yes",
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
            "label": "No",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 1,
      "nodeDisplayName": "Your Name, Business Title & Company",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_1',
      "conversationBlurbs":["We have your company name & tile as shown below", "Please confirm if there are errors"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "value": "Andrew", // preFilled data
          "valueType": "preFill", // used for css for checked (if prefill) data; not of much value in survey
          "name": "firstName",
          "label": "First Name",
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
            "value": "Tornatzky",
            "valueType": "preFill",
            "fieldType": "lastName",
            "name": "lastName", // name = value pair
            "label": "Last Name",
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
            "value": "Dir of Business Dev Industrial Print",
            "valueType": "preFill",
            "fieldType": "businessTitle",
            "name": "businessTitle",
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
            "value": "Konica Minolta Holdings USA",
            "valueType": "preFill",
            "fieldType": "company",
            "name": "company",
            "label": "Company",
            "required": true
          },
          "da_meob": {
            "precedence": 2, // not used, remove it
            "da_disob": true,
            "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 2,
      "nodeDisplayName": "Your Email & Phone Number",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_2',
      "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
      "nodeOutputContent": [  [{
        "da_ddf": {
          "value": "12035980976",
          "valueType": "preFill",
          "fieldType": "phone",
          "name": "phone",
          "label": "Phone Number",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
        }
      }],
        [{
          "da_ddf": {
            "value": "a.arnold@ferno.com",
            "valueType": "preFill",
            //  "value": "",
            //  "valueType": "",
            "name": "email",
            "fieldType": "email",
            "label": "Email Address",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": [{"da_ob_seg": "email", "da_ob_sseg": null}]
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 3,
      "nodeDisplayName": "Your Organization Address",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_3',
      "conversationBlurbs":["Now your business address", "Please change if it is not correct"],
      "nodeOutputContent": [  [{
        "da_ddf": {
          "value": "6019 South Bemis Street",
          "valueType": "preFill", // this is of no value; used for css
          "name": "streetAddress1", // name - value pair used to dyanmically create a AJAX object
          "fieldType": "streetAddress1",
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
            "valueType": "preFill",// this is of no value; used for css
            "name": "streetAddress2",
            "fieldType": "streetAddress2",
            "label": "Street Address 2",
            "required": false
          },
          "da_meob": {

            "da_disob": true,
            "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
          }
        }],
        [{
          "da_ddf": {
            "value": "Littleton",
            "valueType": "preFill",
            "name": "city",
            "fieldType": "city",
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
            "value": "CO",
            "valueType": "preFill",
            "name": "state",
            "fieldType": "state",
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
            "value": "80120",
            "valueType": "preFill",
            "name": "zipCode",
            "fieldType": "zipCode",
            "label": "Zip Code",
            "required": true
          },
          "da_meob": {

            "da_disob": true,
            "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 4,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_4',
      "conversationBlurbs":["One quick thing I am hoping the address you provided is business adddress. Right?", "Please confirm"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "value": "yes",
          "valueType": "", // this is css related stuff; ok for now;
          "name": "q6", // it really should be primaryIndustry but where does this come from; hence Q4
          "label": "Yes",
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
            "name": "q6", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "No",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 5,
      "nodeDisplayName": "Your Business Address",
      "nodeTemplateCategory": "contactDataCollector",
      "nodeContentId": '534_0_5',
      "conversationBlurbs":["Oops!", "They want me to get your business address", "I know I am being a pain. Please enter your business address"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "value": "",
          "valueType": "", // this is of no value; used for css
          "name": "streetAddress1", // name - value pair used to dyanmically create a AJAX object
          "fieldType": "streetAddress1",
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
            "valueType": "",// this is of no value; used for css
            "name": "streetAddress2",
            "fieldType": "streetAddress2",
            "label": "Street Address 2",
            "required": false
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
            "fieldType": "city",
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
            "fieldType": "state",
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
            "fieldType": "zipCode",
            "label": "Zip Code",
            "required": true
          },
          "da_meob": {

            "da_disob": true,
            "da_obseg": [{"da_ob_seg": "fnam", "da_ob_sseg": null}]
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 6,
      "nodeDisplayName": "Primary Industry or Product Category",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_6',
      "conversationBlurbs":["Just a few more questions and we are done. i promise", "Please select your primary industry"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "value": "foodBeverage",
          "valueType": "", // this is css related stuff; ok for now;
          "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
          "label": "Food & Beverage Mfg.",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "value": "healthcare",
            "valueType": "",
            "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Healthcare Products",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "value": "household",
            "valueType": "",
            "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Household & Automotive",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "value": "cosmetics",
            "valueType": "",
            "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Cosmetics & Personal Care",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "value": "suppliers",
            "valueType": "",
            "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Packaging & Processing Supplier",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "value": "otherPackaged",
            "valueType": "",
            "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Other Packaged Goods",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "value": "dnq",
            "valueType": "",
            "name": "q2_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "Don't Know",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 7,
      "nodeDisplayName": "Food Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_7',
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "nodeOutputContent": [  [{
        "da_ddf": {
          "value": "bakerySnack",
          "valueType": "preFill",
          "name": "q1_mc_1",
          "label": "Bakery & Snack",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {

            "valueType": "",
            "name": "q1_mc_2",
            "value": "cerealsBreakfast",
            "label": "Cereals, Breakfast Foods",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_3",
            "value": "confectionCandy",
            "label": "Confection & Candy",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_4",
            "value": "dairy",
            "label": "Dairy",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_5",
            "value": "fruits",
            "label": "Fruits, Vegetables ",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_6",
            "value": "grains",
            "label": "Grains, Seeds, Beans, Flour",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "preFill",
            "name": "q1_mc_7",
            "value": "meat",
            "label": "Meat, Poultry, Seafood",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_8",
            "value": "petFood",
            "label": "Pet Food, Pet Care",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_9",
            "value": "preparedFoods",
            "label": "Prepared Foods",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_10",
            "value": "soups",
            "label": "Soups, Spices, etc",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "preFill",
            "name": "q1_mc_11",
            "value": "frozenFoods",
            "label": "Frozen, Refrigerated Foods",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "preFill",
            "name": "q1_mc_12",
            "value": "vitamin",
            "label": "Nutraceutical, Vitamin, Supplement",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q1_mc_13",
            "value": "other",
            "label": "Other ",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 8,
      "nodeDisplayName": "Healthcare Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_8',
      "conversationBlurbs":["Health Care product categories", "Choose all products that apply to you"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "valueType": "preFill",
          "name": "q4c_1",
          "value": "pharmaceutical",
          "label": "Pharmaceutical",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_2",
            "value": "biopharmaceutical",
            "label": "Biological, Biopharmaceutical",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_3",
            "value": "medicaldevices",
            "label": "Medical Devices",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_4",
            "value": "medicalSupplies",
            "label": " Medical, Dental Instruments or Supplies",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_5",
            "value": "nutraceutical",
            "label": "Nutraceutical, Vitamin, Dietary Supplement",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_6",
            "value": "contractManufacturing",
            "label": "Contract Manufacturing Org – Pharma,Biopharma",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_7",
            "value": "OTC",
            "label": "Over the Counter Products",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_8",
            "value": "cannabis",
            "label": "Cannabis Products",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4c_9",
            "value": "otherHealthcare",
            "label": "Other healthcare products ",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 9,
      "nodeDisplayName": "Household Automotive Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_9',
      "conversationBlurbs":["Household & Automotive product categories", "Choose all products that apply to you"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "valueType": "",
          "name": "q4d_1",
          "value": "detergents",
          "label": "Detergent & Cleaners",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }], [{
        "da_ddf": {
          "valueType": "",
          "name": "q4d_2",
          "value": "chemicals",
          "label": "Houshold & Auto Chemicals",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4d_3",
            "value": "tissues",
            "label": "Tissues & Paper Towels",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],

        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4d_4",
            "value": "other",
            "label": "Other Household",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4d_5",
            "value": "other",
            "label": "Other Automotive",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 10,
      "nodeDisplayName": "Other Packaged Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_10',
      "conversationBlurbs":["Other Packaged product categories", "Choose all products that apply to you"],
      "nodeOutputContent": [[{
        "da_ddf": {
          "valueType": "",
          "name": "q4e_1",
          "value": "homeimprovement",
          "label": "Building, Construction, Home Improvement",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }], [{
        "da_ddf": {
          "valueType": "",
          "name": "q4e_2",
          "value": "cannabis",
          "label": "Cannabis Products",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_3",
            "value": "chemical",
            "label": "Chemical",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_4",
            "value": "consumerelectronics",
            "label": "Consumer Electronics & Appliances",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_5",
            "value": "hardware",
            "label": "Hardware & Tools",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_6",
            "value": "paper",
            "label": "Paper & Printing",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],

        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_7",
            "value": "petfood",
            "label": "Pet Food and Pet Care",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_8",
            "value": "textilesapparel",
            "label": "Texttiles, Apparel, Footwear",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_9",
            "value": "tobacco",
            "label": "Tobacco & Smoking Products",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_10",
            "value": "toys",
            "label": "Toys, Sports, Crafts",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_11",
            "value": "distribution",
            "label": "Warehouse & Distribution",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4e_12",
            "value": "other",
            "label": "Other Packaged Products",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 11,
      "nodeDisplayName": "Packaging Supplier Categories",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_11',
      "conversationBlurbs":["Packaging Supplier categories", "Choose all products that apply to you"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "valueType": "",
          "name": "q4f_1",
          "value": "machinery",
          "label": "Packaging Machinery",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_2",
            "value": "designfirm",
            "label": "Packaging Design Firm",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_3",
            "value": "controls",
            "label": "Controls & Machine Components",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_4",
            "value": "distributor",
            "label": "Packaging Distributor",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_5",
            "value": "containermanufacturer",
            "label": "Container, Closure Manufacturer",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_6",
            "value": "rawmaterials",
            "label": "Raw Materials( Film, Board, Relish Etc)",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_7",
            "value": "converter",
            "label": "Converter",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_8",
            "value": "lineintegration",
            "label": "Line Integration",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_9",
            "value": "consulting",
            "label": "Consulting Services",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4f_10",
            "value": "dnq",
            "label": "Don't Know",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 12,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "terminateConversation",
      "nodeContentId": '534_0_12',
      "conversationBlurbs":[],
      "nodeOutputContent": [  [
        {
          'da_ddf': {
            "text": ["I am sorry looks like you do not qualify for this magazine"]
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
              "text": ["We send this magazine to only folks in the Packaging Industry"]
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
    },
    {
      "topicID": 0,
      "nodeOrder": 13,
      "nodeDisplayName": "Beverage Products",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_13',
      "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "valueType": "",
          "name": "q4b-1",
          "value": "beer",
          "label": "Beer",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-2",
            "value": "coffee",
            "label": "Coffee",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-3",
            "value": "drinks",
            "label": "Drinks, Nonalcoholic (energy, sport, etc.)",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-4",
            "value": "dairy",
            "label": "Dairy, Non Alcoholic",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-5",
            "value": "dairy",
            "label": "Juice",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "value": "powdered Beverages",
            "label": "Powdered Beverages",
            "valueType": "",
            "name": "q4b-6",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-7",
            "value": "softDrinks",
            "label": "Soft Drinks",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-8",
            "value": "spirits",
            "label": "Spirits & Liquors",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-9",
            "value": "tea",
            "label": "Tea",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-10",
            "value": "water",
            "label": "Water",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-11",
            "value": "wine",
            "label": "Wine",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "q4b-12",
            "value": "otherBeverage",
            "label": "Other beverage",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 14,
      "nodeDisplayName": "Your Job Responsibility",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_14',
      "conversationBlurbs":["We are almost done", "What's your current job responsibility"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "valueType": "",
          "name": "jobresponsibility",
          "value": "packageDesign",
          "label": "Package Design or Development & Brand Management",
          "required": true
        },
        "da_meob": {
          "da_disob": true,
          "da_obseg": []
        }
      }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "operations",
            "label": "Production, Operations, Quality",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "cmanufacturers",
            "label": "Contract Manufacturers",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "engineering",
            "label": "Engineering",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "plantManagement",
            "label": "Plant Management",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "CXO",
            "label": "CEO, Gen Mgr. & Other Senior Mgmt",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "logistics",
            "label": "Logistics, Supply Chain Management",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "regulatoryAffairs",
            "label": "Regulatory Affairs, Validation, Compliance",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "procurement",
            "label": "Procurement",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "sales",
            "label": "Sales",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
        [{
          "da_ddf": {
            "valueType": "",
            "name": "jobresponsibility",
            "value": "Other",
            "label": "Other",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }]]
    },
    {
      "topicID": 0,
      "nodeOrder": 15,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "closeEndedQuestion",
      "nodeContentId": '534_0_15',
      "conversationBlurbs":["One final question I am supposed to ask you", "Would it be ok with you if in future","We texted you with mgazine renewal reminders","I promise we wont spam"],
      "nodeOutputContent": [ [{
        "da_ddf": {
          "value": "yes",
          "valueType": "", // this is css related stuff; ok for now;
          "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
          "label": "Yes",
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
            "label": "No",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],]
    },
    {
      "topicID": 0,
      "nodeOrder": 16,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "terminateConversation",
      "nodeContentId": '534_0_16',
      "conversationBlurbs":[],
      "nodeOutputContent": [ [
        {
          'da_ddf': {
            "text": ["Thank you so much!!"]
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
              "text": ["I hope you like the magazine"]
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
    },
    {
      "topicID": 0,
      "nodeOrder": 17,
      "nodeDisplayName": "",
      "nodeTemplateCategory": "terminateConversation",
      "nodeContentId": '534_0_17',
      "conversationBlurbs":[],
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
              "text": ["You are not interested in our publication"]
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
              "text": ["Looks like I did not do a good job to convince you"]
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
    },
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
          "desktop",
          "tablet"
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
          {
            "importance": "2",
            "fieldName": "fullName",
            "required": true,
            "label": "Full Name"},
          {
            "importance": "3",
            "fieldName": "phoneNumber",
            "required": true,
            "label": "Phone Number"},
          {
            "importance": "1",
            "fieldName": "emailAddress",
            "required": true,
            "label": "Email Address"},
          {
            "importance": "4",
            "fieldName": "companyName",
            "required": true,
            "label": "Company Name"},
          {
            "importance": "5",
            "fieldName": "businessTitle",
            "required": true,
            "label": "Business Title"}
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

    function publishPaymentProcessor(a) {
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

    function publishSetupParameters(a) {

    var response = postPayload(setupParameters, 'setup', trackingID);

    }

    function publishActivateParameters(a) {

    var response = postPayload(activateParameters, 'activate', trackingID);

    }

    function publishConversionParameters(a) {

      var response = postPayload(conversionParameters, 'cgoal', trackingID);

    }

    function newCampaignAll(a) {

      var response = newCampaignMeta(a);
      var response = publishTopicsMeta(a);
      var response = publishNodesMeta(a);
      var response = publishNodeInputContent(a);
    //  var response = publishNodeOutputContent(a);
      var response = publishSetupParameters(a);
      var response = publishConversionParameters(a);

      var response = publishActivateParameters(a);


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



