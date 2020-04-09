

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

    $("#paymentProcessorMeta").click(publishPaymentProcessorMeta);

    $("#paymentProcessor").click(publishPaymentProcessorInput);

    $("#campaignSetupParams").click(publishSetupParameters);

    $("#endPublishing").click(endPublishing);

    var
    trackingID= 594,
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
            "cnam": "Reason Subscription",
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
              "campaignName": "Reason Subscription",
              "conversationInitiationMode": "PR-1",
              "webproperty": "bs-local.com",
              "searchType": null,
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
           "topicName": "Reason Magazine Subscription"
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
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [{"skipTo": "https://www.reason.com"}],
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
          "nodeContentId": '594_0_0',
          "nodeTemplateCategory": "paymentProcessor",
          "searchQuery":false,
          "searchContent":false,
          "conversationBlurbs":["Please select your subscription", "Our normal price is $249 a year", "This is a really Great deal!!", "You can always cancel after a month"],
          "audioAnnotation": [],
          "nodeInputContent": [
          {

            "callToAction": "Save 65 % of Newsstand Price!",

           "mediaOfferings": [
              {
                "sku": "print",
                "skuLabel": "Reason: Print",
                "price": 14.97,
                "priceLabel": "11 Issues (1 Yr) - $14.97",
                "skuImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/paidmagazines/reason/cover1.jpg"
              },
              {
                "sku": "digital",
                "skuLabel": "Reason: Digital",
                "price": 14.97,
                "priceLabel": "11 Issues (1 Yr) - $14.97",
                "skuImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/paidmagazines/reason/cover2.jpg"
              },
              {
               "sku": "printAndDigital",
               "skuLabel": "Reason: Digital + Print",
               "price": 19.97,
               "priceLabel": "11 Issues (1 Yr) - $19.97",
               "skuImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/paidmagazines/reason/cover3.jpg"
             },
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
                "paymentDisclaimer": "Your credit card order includes the convenience of automatic renewal. We will charge your credit card at the price above and then before each new subscription term at the low renewal rate in effect at that time. You will receive a notification before your card is charged. You may cancel your subscription at any time and receive a full refund for the remainder of your term"
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
        "nodeDisplayName": "",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '594_0_1',
        "terminationMode": 'exitOnNewPage',
        "conversationBlurbs":[],
        "audioAnnotation": [],
        "nodeInputContent": [
          {
            "exitMessage": ["Thank you so much today", "I do hope you enjoy the content", " I will now send your to our home page"],
          }
        ]

      }, //1
  ];


    storyNodesOutputContent = [



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
  //    var response = publishNodeOutputContent(a);
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



