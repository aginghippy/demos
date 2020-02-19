storyNodesInputContent = [

  {
    "topicID": 0,
    "nodeOrder": 0,
    "nodeDisplayName": "",
    "nodeTemplateCategory": "closeEndedQuestion",
    "nodeContentId": '534_0_0', // tracking id, topic id, node id
    "answerRequired": true,
    "filterContent": false,
    "questionType": "singleChoice",
    "conversationBlurbs":["Hi","All I need are answers to a few Qs", "So that we can send a free copy of Packaging World - a magzine for professionals in Packaging Industry", "Please confirm that you would like to receive Packaging World"],
    "audioAnnotation": [],
    "nodeInputContent": [  [{
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
    "nodeContentId": '534_0_1',
    "nodeTemplateCategory": "contactDataCollector",
    "answerRequired": true,
    "conversationBlurbs":["We have your company name & tile as shown below", "Please confirm if there are errors"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
    "audioAnnotation": [],
    "nodeInputContent": [  [{
      "da_ddf": {
        "value": "12035980976",
        "valueType": "preFill",
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
    "answerRequired": true,
    "conversationBlurbs":["Now your business address", "Please change if it is not correct"],
    "audioAnnotation": [],
    "nodeInputContent": [  [{
      "da_ddf": {
        "value": "6019 South Bemis Street",
        "valueType": "preFill", // this is of no value; used for css
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
          "valueType": "preFill",// this is of no value; used for css
          "name": "streetAddress2",
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "singleChoice",
    "conversationBlurbs":["One quick thing I am hoping the address you provided is business adddress. Right?", "Please confirm"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "conversationBlurbs":["Oops!", "They want me to get your business address", "I know I am being a pain. Please enter your business address"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
          "valueType": "",// this is of no value; used for css
          "name": "streetAddress2",
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
      }]]
  },
  {
    "topicID": 0,
    "nodeOrder": 6,
    "nodeDisplayName": "Primary Industry or Product Category",
    "nodeTemplateCategory": "closeEndedQuestion",
    "nodeContentId": '534_0_6',
    "answerRequired": true,
    "filterContent": false,
    "questionType": "singleChoice",
    "conversationBlurbs":["Just a few more questions and we are done. i promise", "Please select your primary industry"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "multipleChoice",
    "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
    "audioAnnotation": [],
    "nodeInputContent": [  [{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "multipleChoice",
    "conversationBlurbs":["Health Care product categories", "Choose all products that apply to you"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "multipleChoice",
    "conversationBlurbs":["Household & Automotive product categories", "Choose all products that apply to you"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "multipleChoice",
    "conversationBlurbs":["Other Packaged product categories", "Choose all products that apply to you"],
    "audioAnnotation": [],
    "nodeInputContent": [[{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "multipleChoice",
    "conversationBlurbs":["Packaging Supplier categories", "Choose all products that apply to you"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "terminationMode": 'exitOnCurrentPage',
    "conversationBlurbs":[],
    "audioAnnotation": [],
    "nodeInputContent": [  [
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "multipleChoice",
    "conversationBlurbs":["Food product categories", "Choose all products that apply to you"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "singleChoice",
    "conversationBlurbs":["We are almost done", "What's your current job responsibility"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "answerRequired": true,
    "filterContent": false,
    "questionType": "singleChoice",
    "conversationBlurbs":["One final question I am supposed to ask you", "Would it be ok with you if in future","We texted you with mgazine renewal reminders","I promise we wont spam"],
    "audioAnnotation": [],
    "nodeInputContent": [ [{
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
    "terminationMode": 'exitOnCurrentPage',
    "conversationBlurbs":[],
    "audioAnnotation": [],
    "nodeInputContent": [ [
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

q = [
  [
    {
      "da_ddf": {
        "tileBodyTitle": "The Starting Point of Robot Automation",
        "tileName": "innovationstagesession",
        "tileValue": "rautomation"
      }

    }, {
    "da_meob": {
      "da_obseg": [],
      "da_disob": true
    }
  }],
  [
    {
      "da_ddf": {
        "tileBodyTitle": "The Butterfly Effect of Belden’s Industrial REVConnect",
        "tileName": "innovationstagesession",
        "tileValue": "butterfly"
      }
    }, {
    "da_meob": {
      "da_obseg": [],
      "da_disob": true
    }
  }],
  [
    {
      "da_ddf": {

        "tileBodyTitle": "Packaging Automation made Economical",
        "tileName": "innovationstagesession",
        "tileValue": "economical"

      }
    }, {
    "da_meob": {
      "da_obseg": [{"da_ob_skey": "dayselection", "da_ob_sval": ["alldays", "day1"]}],
      "da_disob": true
    }
  }],
  [
    {
      "da_ddf": {

        "tileBodyTitle": "Applying Cobots in Packaging Applications",
        "tileName": "innovationstagesession",
        "tileValue": "cobots"

      }
    }, {
    "da_meob": {
      "da_obseg": [],
      "da_disob": true
    }
  }],
  [
    {
      "da_ddf": {

        "tileBodyTitle": "Positive Plastics Pledge for a Circular and Sustainable Future",
        "tileName": "innovationstagesession",
        "tileValue": "pledge"

      }
    }, {
    "da_meob": {
      "da_obseg": [],
      "da_disob": false
    }
  }],
  [
    {
      "da_ddf": {

        "tileBodyTitle": "Meeting Sustainability Goals in the E-Commerce Channel",
        "tileName": "innovationstagesession",
        "tileValue": "ecommerce"

      }
    }, {"da_meob": {"da_obseg": [], "da_disob": true}}]
]

[[
  {
    'da_ddf': {

        "tileBodyTitle": "The Starting Point of Robot Automation",
        "tileName":"innovationstagesession",
        "tileValue":"rautomation",

    }
  },
  {
    'da_meob': {
      "da_obseg": [
        {
          "da_ob_skey": "dayselection",
          "da_ob_sval": ["alldays", "day1"]
        }
      ],
      "da_disob": false
    }
  }
],
  [
    {
      'da_ddf': {
        "tile": [{
          "tileBodyTitle": "The Butterfly Effect of Belden’s Industrial REVConnect",
          "tileName":"innovationstagesession",
          "tileValue":"butterfly",
        }]
      }
    },
    {
      'da_meob': {
        "da_obseg": [
          {
            "da_ob_skey": "dayselection",
            "da_ob_sval": ["alldays", "day1"]
          }
        ],
        "da_disob": false
      }
    }
  ],

  [
    {
      'da_ddf': {
        "tile": [{
          "tileBodyTitle": "Packaging Automation made Economical",
          "tileName":"innovationstagesession",
          "tileValue":"economical",
        }]
      }
    },
    {
      'da_meob': {
        "da_obseg": [
          {
            "da_ob_skey": "dayselection",
            "da_ob_sval": ["alldays", "day1"]
          }
        ],
        "da_disob": false
      }
    }
  ],
  [
    {
      'da_ddf': {
        "tile": [{
          "tileBodyTitle": "Applying Cobots in Packaging Applications",
          "tileName":"innovationstagesession",
          "tileValue":"cobots",
        }]
      }
    },
    {
      'da_meob': {
        "da_obseg": [
          {
            "da_ob_skey": "dayselection",
            "da_ob_sval": ["alldays", "day1"]
          }
        ],
        "da_disob": false
      }
    }
  ],
  [
    {
      'da_ddf': {
        "tile": [{
          "tileBodyTitle": "Positive Plastics Pledge for a Circular and Sustainable Future",
          "tileName":"innovationstagesession",
          "tileValue":"pledge",
        }]
      }
    },
    {
      'da_meob': {
        "da_obseg": [
          {
            "da_ob_skey": "dayselection",
            "da_ob_sval": ["alldays", "day1"]
          }
        ],
        "da_disob": false
      }
    }
  ],
  [
    {
      'da_ddf': {
        "tile": [{
          "tileBodyTitle": "Meeting Sustainability Goals in the E-Commerce Channel",
          "tileName":"innovationstagesession",
          "tileValue":"ecommerce",
        }]
      }
    },
    {
      'da_meob': {
        "da_obseg": [
          {
            "da_ob_skey": "dayselection",
            "da_ob_sval": ["alldays", "day1"]
          }
        ],
        "da_disob": false
      }
    }
  ]]