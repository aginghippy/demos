

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
    trackingID= 544,
    useCaseID = 1,
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
              "cnam": "Teachers Fund Raising",
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
           "topicName": "Teachers Online Fund Raising"
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
            "nodeDisplayName": "Select Payment Amount",
            "nodeTemplateCategory": "paymentProcessor",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // node order 0;  nodeTemplateCategory = paymentProcessor
          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Select Annual Giving Donation Choices",
            "nodeTemplateCategory": "closeEndedQuestion",
            "skipLogicType": "default",
            "skipLogic": [

            ],
            "dataPrefill": false,
            "searchContentOrQuery": false
          }, // node order 1, nodeTemplateCategory = closeEndedQuestion
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "",
            "nodeTemplateCategory": "terminateConversation",
            "skipLogicType": "end",
            "skipLogic": [],
            "dataPrefill": false,
            "searchContentOrQuery": false
          } // node order 2
        ]
      }
    ],


   // termination mode can be "exitOnNewPage", exitOnCurrentPage, exitWithWithoutMessage
   // if exitOnNewPage then skipto for skipType end should have the url;

    storyNodesInputContent = [

      {
          "topicID": 0,
          "nodeOrder": 0,
          "nodeDisplayName": "Payment Amount",
          "nodeContentId": '544_0_0',
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
        }, // the keys HAVE to match the payment processor subcategory

      {
        "topicID": 0,
        "nodeOrder": 1,
        "nodeDisplayName": "Select Annual Giving Donation Choices",
        "nodeTemplateCategory": "closeEndedQuestion",
        "nodeContentId": '544_0_1', // tracking id, topic id, node id
        "answerRequired": true,
        "filterContent": false,
        "questionType": "singleChoice",
        "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
        "audioAnnotation": [],
        "nodeInputContent": [
          [{
          "da_ddf": {
            "value": "TC Fund - General Operating",
            "valueType": "", // this is css related stuff; ok for now;
            "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
            "label": "TC Fund - General Operating",
            "required": true
          },
          "da_meob": {
            "da_disob": true,
            "da_obseg": []
          }
        }],
          [{
            "da_ddf": {
              "value": "Financial Aid",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Financial Aid",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Arts and Humanities",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Arts and Humanities",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Biobehavorial Sciences",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Biobehavorial Sciences",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Clinical Psychology",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Clinical Psychology",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Curriculum and Teaching",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Curriculum and Teaching",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Educational Policy & Social Analysis",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Educational Policy & Social Analysis",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Health & Behavorial Studies",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "No",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Human Development",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Human Development",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Organizational Leadership",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Organizational Leadership",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "Mathematics Science & Technology",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "Mathematics Science & Technology",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],
          [{
            "da_ddf": {
              "value": "International Studies",
              "valueType": "",
              "name": "q1_sc", // it really should be primaryIndustry but where does this come from; hence Q4
              "label": "International Studies",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": []
            }
          }],

        ]
      },

      {
        "topicID": 0,
        "nodeOrder": 2,
        "nodeDisplayName": "",
        "nodeTemplateCategory": "terminateConversation",
        "nodeContentId": '544_0_2',
        "terminationMode": 'exitOnCurrentPage',
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
      },
  ];

    storyNodesOutputContent = [

    {
      "topicID": 0,
      "nodeOrder": 0,
      "nodeDisplayName": "Payment Amount",
      "nodeContentId": '544_0_0',
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
    }, // true should not be the string true; payProcessingCharge
    {
        "topicID": 0,
        "nodeOrder": 5441,
        "nodeDisplayName": "Payment Method",
        "nodeContentId": '544_0_0_1',
        "nodeOutputContent": [
          [
            {
              "da_ddf": {
                "digitalWallets": [
                  "PayPal",
                  "Visa Checkout",
                  "Master Card Checkout"
                ],
                "websitePaymentPage":"https://www.tc.columbia.edu/giving/annual-giving/give-to-tc/"
              },
              "da_meob": {"da_disob": true, "da_obseg": []}
            }
          ]
        ]
      }, // node orders for these nodes are pseudo 5441, 5442, etc. (trackingid derived)
    {
        "topicID": 0,
        "nodeOrder": 5442,
        "nodeDisplayName": "Billing Information",
        "nodeContentId": '544_0_0_2',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "firstName",
              "label": "First Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "lastName",
              "label": "Last Name",
              "required": true
            }, "da_meob": {"precedence": 2, "da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "preFill",
              "name": "streetAddress1",
              "label": "Street Address 1",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "city",
              "label": "City",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {"value": "", "valueType": "", "name": "state", "label": "State", "required": true},
            "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }],
          [{
            "da_ddf": {
              "value": "",
              "valueType": "",
              "name": "zipCode",
              "label": "Zip Code",
              "required": true
            }, "da_meob": {"da_disob": true, "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]}
          }]]
      }, // node content id for pseudo nodes is 534_0_0 + _1 or _2 or _3
    {
        "topicID": 0,
        "nodeOrder": 5443,
        "nodeDisplayName": "PaymentProcessing",
        "nodeContentId": '544_0_0_3',
        "nodeOutputContent": [
          [{
            "da_ddf": {
              "value": "", // preFilled data if any
              "valueType": "", // used for css for checked (if prefill) data; not of much value in survey
              "name": "cardNumber",
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
              "label": "CVC",
              "required": true
            },
            "da_meob": {
              "da_disob": true,
              "da_obseg": [{"da_ob_seg": null, "da_ob_sseg": null}]
            }
          }],

        ]
      },
    {
      "topicID": 0,
      "nodeOrder": 1,
      "nodeDisplayName": "Select Annual Giving Donation Choices",
      "nodeContentId": '544_0_1',
      "conversationBlurbs":["We have your company name & tile as shown below", "Please confirm if there are errors"],
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
        }],
      ]
    },
    {
      "topicID": 0,
      "nodeOrder": 2,
      "nodeDisplayName": "",
      "nodeContentId": '544_0_2',
      "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
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



