

$(document).ready(function(){

    $("#newCampaignAll").click(newCampaignAll);

    $("#updateCampaignALL").click(updateCampaignAll);

    $("#newCampaignMeta").click(newCampaignMeta);

    $("#updateCampaignMeta").click(updateCampaignMeta);

    $("#publishStoryTopics").click(publishTopicsMeta);

    $("#publishNodesMeta").click(publishNodesMeta);

    $("#publishNodeInputContent").click(publishNodeInputContent);


    $("#campaignActivateParams").click(publishActivateParameters);

    $("#paymentProcessorMeta").click(publishPaymentProcessorMeta);

    $("#paymentProcessor").click(publishPaymentProcessorInput);

    $("#campaignSetupParams").click(publishSetupParameters);

    $("#endPublishing").click(endPublishing);

    var
    trackingID= 584,
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
            "webproperty": "bs-local.com",
            "searchType": null,
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
              "ncnt": "3",
              "campaignName": "Adweek Subscription",
              "conversationInitiationMode": "PR-1",
              "webproperty": "bs-local.com",
              "searchType": null,
              "campaignType": "simple",
              "debugMode": false,
              "visitorGreeting": "Hi! We publish every month terrific content for advertising industry professionals. Stuff not on the website. Subscription is free!. It takes less than a minute. I promise"
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
           "topicName": "Adweek Magazine Subscription"
         }

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
            "nodeDisplayName": "Select Subscription",
            "nodeTemplateCategory": "paymentProcessor",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false
          }, // node order 0;  nodeTemplateCategory = paymentProcessor

          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Select Your Type of Business",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "complex",
            "skipLogic": [
              {
                "resp": "agency",
                "skipTo": 2
              },
              {
                "resp": "brand",
                "skipTo": 3
              },
              {
                "resp": "technology",
                "skipTo": 4
              },
              {
                "resp": "media",
                "skipTo": 5
              },
              {
                "resp": "other",
                "skipTo": 6
              },

            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //1
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "Type of Agency",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 7
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //2
          {
            "topicID": 0,
            "nodeOrder": 3,
            "nodeDisplayName": "Type of Brand",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 7
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //3
          {
            "topicID": 0,
            "nodeOrder": 4,
            "nodeDisplayName": "Type of Technology",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 7
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //4
          {
            "topicID": 0,
            "nodeOrder": 5,
            "nodeDisplayName": "Type of Media",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 7
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //5
          {
            "topicID": 0,
            "nodeOrder": 6,
            "nodeDisplayName": "Miscellaneous Category",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 7
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //6
          {
            "topicID": 0,
            "nodeOrder": 7,
            "nodeDisplayName": "Your Job Function",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 8
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //7
          {
            "topicID": 0,
            "nodeOrder": 8,
            "nodeDisplayName": "Your Seniority",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "jump",
            "skipLogic": [
              {
                "skipTo": 9
              }
            ],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false,
          }, //8

          {
            "topicID": 0,
            "nodeOrder": 9,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.adweek.com"}],
            "dataPrefilled": false,
            "searchContent": false,
            "searchQuery": false
          } // 9
        ]
      }
    ],


   // termination mode can be "exitOnNewPage", exitOnCurrentPage, exitWithWithoutMessage
   // if exitOnNewPage then skipto for skipType end should have the url;

    storyNodesInputContent = [



      {
          "topicID": 0,
          "nodeOrder": 0,
          "nodeDisplayName": "Select Subscription",
          "nodeContentId": '584_0_0',
          "nodeTemplateCategory": "paymentProcessor",
          "searchQuery":false,
          "searchContent":false,
          "conversationBlurbs":["Please select your subscription", "Our normal price is $249 a year", "This is a really Great deal!!", "You can always cancel after a month"],
          "audioAnnotation": [],
          "nodeInputContent": [
          {

            "callToAction": "Get 4 Weeks of All-Access for only $4.00!",
       /*     "donationChoices": [
              {
                "value": "100",
                "valueType": null,
                "fieldName": "donationAmount",
                "label": "100"
              },
              {
                "value": "200",
                "valueType": null,
                "fieldName": "donationAmount",
                "label": "200"
              },
              {
                "value": "300",
                "valueType": null,
                "fieldName": "donationAmount",
                "label": "200"
              },
              {
                "value": "400",
                "valueType": null,
                "fieldName": "donationAmount",
                "label": "200"
              },
              {
                "value": "other",
                "valueType": null,
                "fieldName": "donationAmount",
                "label": "Other"
              }
            ], */
          "mediaOfferings": [
              {
                "sku": "printAndDigital",
                "skuLabel": "Adweek Pro Digital + Print",
                "price": 4.0,
                "priceLabel": "Access to The Institute for Brand Marketing Research",
                "skuImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/paidmagazines/adweek/cover1.png"
              },
              {
                "sku": "printAndDigital",
                "skuLabel": "Adweek Pro Digital",
                "price": 4.0,
                "priceLabel": "Access to The Institute for Brand Marketing Research",
                "skuImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/paidmagazines/adweek/cover2.jpg"
              }
            ],
            "paymentMethod": [
              {
                "digitalWalletsAccepted": [
                  "PayPal",
                 // "Visa Checkout",
                 // "Master Card Checkout"
                ],
          //      "websitePaymentPage": "https://www.tesu.edu/",
                "autoRenewal": true,
                "paymentDisclaimer": "By subscribing, you agree to the terms of sale, including the Cancellation and Refund Policy. After this introductory period is over, the membership plan you selected will automatically renew and you will be charged $199 for the following 12-month term. You will continue to be billed automatically at the then current rate. ADWEEK.COM will notify you via email before your trial period ends and your credit card is charged confirming your service and the rate that will be put into effect. Renewal rates are subject to change at any time with or without notice. Unless you notify us in advance, your service will continue without interruption. You may cancel at any time. The cancellation goes into effect at the start of the following billing cycle. To cancel your order, contact customer service at 844.674.8161 (U.S.) or 845.267.3007 (Outside U.S.) or manage your subscription via the My Account page."
              }
            ],
            "billingInformation": [
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
                "fieldName": "emailAddress",
                "required": true,
                "label": "Email Address"
              },
              {
                "fieldName": "address1",
                "required": true,
                "label": "Address 1"
              },
              {
                "fieldName": "state",
                "required": true,
                "label": "State"
              },
              {
                "fieldName": "city",
                "required": true,
                "label": "City"
              },
              {
                "fieldName": "zipCode",
                "required": true,
                "label": "Zip Code"
              }
            ]
          }
        ] // new format

        }, // 0 the keys HAVE to match the payment processor subcategory

      {
        "topicID": 0,
        "nodeOrder": 1,
        "nodeDisplayName": "Select Your Type of Business",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_1',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Thank you so much for your subscription", "If you don't mind, I have a few more questions and we are done. i promise", "Please select your business type"],
        "audioAnnotation": [],
        "nodeInputContent": [

          { "displayName": "Agency",
            "returnValue": "agency"
          },
          { "displayName": "Brand",
            "returnValue": "brand"
          },
          { "displayName": "Technology",
            "returnValue": "technology"
          },
          { "displayName": "Media",
            "returnValue": "media"
          },
          { "displayName": "Other",
            "returnValue": "other"
          },

        ]
      }, //1
      {
        "topicID": 0,
        "nodeOrder": 2,
        "nodeDisplayName": "Type of Agency",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_2',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Please enter the type of agency you work", "This way we can send you more relevant content"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Advertising Full Service",
            "returnValue": "advertising"
          },
          { "displayName": "Digital",
            "returnValue": "digital"
          },
          { "displayName": "Event, Experential",
            "returnValue": "event"
          },
          { "displayName": "Healthcare Marketing",
            "returnValue": "healthcarem"
          },
          { "displayName": "Influencer/Word of Mouth",
            "returnValue": "influencer"
          },
          { "displayName": "Marketing Communications",
            "returnValue": "marcom"
          },
          { "displayName": "Media Buying & Planning",
            "returnValue": "buying"
          },
          { "displayName": "Promotional Marketing",
            "returnValue": "promo"
          },
          { "displayName": "Public Relations",
            "returnValue": "pr"
          },
          { "displayName": "Shopper Marketing",
            "returnValue": "shopper"
          },
          { "displayName": "Other",
            "returnValue": "other"
          },

        ]
      }, //2
      {
        "topicID": 0,
        "nodeOrder": 3,
        "nodeDisplayName": "Type of Brand",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_3',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Please enter the type of industry you work in", "This way we can send you more relevant content"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Aerospace & Engineering",
            "returnValue": "foodBeverage"
          },
          { "displayName": "Agriculture",
            "returnValue": "agri"
          },
          { "displayName": "Apparel & Accessories",
            "returnValue": "apparel"
          },
          { "displayName": "Automotive",
            "returnValue": "automotive"
          },
          { "displayName": "Business Services",
            "returnValue": "businesss"
          },
          { "displayName": "Computers & Computer Products",
            "returnValue": "computers"
          },
          { "displayName": "Construction & Contractors",
            "returnValue": "construction"
          },
          { "displayName": "Computers & Computer Products",
            "returnValue": "computers"
          },

          { "displayName": "Consulting",
            "returnValue": "consulting"
          },
          { "displayName": "Consumer Electronics",
            "returnValue": "electronics"
          },
          { "displayName": "Consumer Packaged Goods",
            "returnValue": "cpg"
          },
          { "displayName": "Energy & Natural Resources",
            "returnValue": "energy"
          },
          { "displayName": "Entertainment & Recreative Sports",
            "returnValue": "entertainment"
          },
          { "displayName": "Financial Services",
            "returnValue": "financial"
          },

        ]
      }, //3
      {
        "topicID": 0,
        "nodeOrder": 4,
        "nodeDisplayName": "Type of Technology",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_4',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Please enter the type of technology solutions you provide", "You can make multiple selections"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Ad Tech",
            "returnValue": "adtech"
          },
          { "displayName": "Search",
            "returnValue": "search"
          },
          { "displayName": "Social Media",
            "returnValue": "social"
          },
          { "displayName": "Commerce",
            "returnValue": "commerce"
          },
          { "displayName": "Content Marketing",
            "returnValue": "content"
          },
          { "displayName": "Internet",
            "returnValue": "internet"
          },
          { "displayName": "Martech",
            "returnValue": "martech"
          },
          { "displayName": "Mobile",
            "returnValue": "mobile"
          },
          { "displayName": "Other",
            "returnValue": "Other"
          },

        ]
      }, //4
      {
        "topicID": 0,
        "nodeOrder": 5,
        "nodeDisplayName": "Type of Media",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_5',
        "answerRequired": true,
        "questionType": "multipleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Please let us know the type of media company you work for", "You can make multiple selections"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Digital",
            "returnValue": "digital"
          },
          { "displayName": "Film Video",
            "returnValue": "film"
          },
          { "displayName": "Magazine",
            "returnValue": "magazine"
          },
          { "displayName": "Newspaper",
            "returnValue": "paper"
          },
          { "displayName": "Outdoor",
            "returnValue": "outdoor"
          },
          { "displayName": "Radio",
            "returnValue": "radio"
          },
          { "displayName": "Television",
            "returnValue": "tv"
          },
          { "displayName": "VR, AR, Immersive",
            "returnValue": "vr"
          },
          { "displayName": "Other",
            "returnValue": "other"
          },

        ]
      }, //5
      {
        "topicID": 0,
        "nodeOrder": 6,
        "nodeDisplayName": "Miscellaneous Category",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_6',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Please select the category that applies to you"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Library",
            "returnValue": "library"
          },
          { "displayName": "Educational, School",
            "returnValue": "education"
          },
          { "displayName": "Other",
            "returnValue": "other"
          }

        ]
      }, //6

      {
        "topicID": 0,
        "nodeOrder": 7,
        "nodeDisplayName": "Your Job Function",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_7',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["Two more questions", "If you don't mind, let us know your job function"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Account Management",
            "returnValue": "accounts"
          },
          { "displayName": "Administrative",
            "returnValue": "admin"
          },
          { "displayName": "Analytics",
            "returnValue": "analytics"
          },

          { "displayName": "Audience Development",
            "returnValue": "ad"
          },
          { "displayName": "Brand Management",
            "returnValue": "brand"
          },
          { "displayName": "Creative",
            "returnValue": "creative"
          },

          { "displayName": "Digital, Online Media Management",
            "returnValue": "digital"
          },
          { "displayName": "Ecommerce",
            "returnValue": "ecommerce"
          },
          { "displayName": "Editorial",
            "returnValue": "editorial"
          },
          { "displayName": "Education",
            "returnValue": "education"
          },
          { "displayName": "Event Management",
            "returnValue": "event"
          },
          { "displayName": "Finance",
            "returnValue": "finance"
          }

        ]
      }, //7

      {
        "topicID": 0,
        "nodeOrder": 8,
        "nodeDisplayName": "Your Seniority",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '584_0_8',
        "answerRequired": true,
        "questionType": "singleChoice",
        "searchContent": false,
        "searchQuery": false,
        "conversationBlurbs":["The last question - your seniority level please"],
        "audioAnnotation": [],
        "nodeInputContent": [
          { "displayName": "Chief Marketing Officer",
            "returnValue": "cmo"
          },
          { "displayName": "Chief Executive Officer",
            "returnValue": "ceo"
          },
          { "displayName": "Chief Digital Officer",
            "returnValue": "cdo"
          },

          { "displayName": "Chief Innovation Officer",
            "returnValue": "cino"
          },
          { "displayName": "Other C-Level",
            "returnValue": "otherc"
          },
          { "displayName": "Board, Owner, Chairman, President",
            "returnValue": "board"
          },

          { "displayName": "Managing Director, General Manager",
            "returnValue": "gm"
          },
          { "displayName": "Executive Vice President",
            "returnValue": "evp"
          },
          { "displayName": "Director",
            "returnValue": "dir"
          },
          { "displayName": "Manager",
            "returnValue": "mgr"
          },
          { "displayName": "Account Executive",
            "returnValue": "exec"
          },
          { "displayName": "Strategist",
            "returnValue": "strategy"
          },
          { "displayName": "Professor, Student",
            "returnValue": "prof"
          },
          { "displayName": "Non-Manager",
            "returnValue": "prof"
          }

        ]
      }, //8

      {
        "topicID": 0,
        "nodeOrder": 9,
        "nodeDisplayName": "",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '584_0_9',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "exitMessage": ["Thank you so much today", "I do hope you enjoy the content", " I will now send your to our home page"],
          }
        ]

      }, //9
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
            "trid": "544"
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



