﻿'use strict';var LuckeyMonkey;(function(n){n.OpportunityApi=function(n){function o(n,t,i,u,f,e,o){var s='@OData.Community.Display.V1.FormattedValue',c='@Microsoft.Dynamics.CRM.lookuplogicalname',h={},a=function(){return n[t+s]===undefined||n[t+s]===null?r:u!==undefined&&u.length>0?n[t+c]===f?n[t+s]:r:n[t+s]},l=function(){return n[t]===undefined||n[t]===null?null:u!==undefined&&u.length>0?n[t+c]===undefined||n[t+c]===f?n[t]:null:n[t]},v=function(f){u!==undefined&&u.length>0?(f=f.replace('{',r).replace('}',r),o[i+'@odata.bind']='/'+u+'('+f+')'):o[t]=f;n[t]=f};return Object.defineProperty(h,'FormattedValue',{get:a}),e?Object.defineProperty(h,'Value',{get:l}):Object.defineProperty(h,'Value',{get:l,set:v}),h}var r='',t={AccountId:{b:'accountid',a:'_accountid_value',c:'accounts',d:'account',r:!0},ActualCloseDate_DateOnly:{a:'actualclosedate'},ActualValue:{a:'actualvalue'},ActualValue_Base:{a:'actualvalue_base',r:!0},BudgetAmount:{a:'budgetamount'},BudgetAmount_Base:{a:'budgetamount_base',r:!0},BudgetStatus:{a:'budgetstatus'},CampaignId:{b:'campaignid',a:'_campaignid_value',c:'campaigns',d:'campaign'},CaptureProposalFeedback:{a:'captureproposalfeedback'},CloseProbability:{a:'closeprobability'},CompleteFinalProposal:{a:'completefinalproposal'},CompleteInternalReview:{a:'completeinternalreview'},ConfirmInterest:{a:'confirminterest'},ContactId:{b:'contactid',a:'_contactid_value',c:'contacts',d:'contact',r:!0},CreatedBy:{b:'createdby',a:'_createdby_value',c:'systemusers',d:'systemuser',r:!0},CreatedOn_UtcDateAndTime:{a:'createdon',r:!0},CreatedOnBehalfBy:{b:'createdonbehalfby',a:'_createdonbehalfby_value',c:'systemusers',d:'systemuser',r:!0},CurrentSituation:{a:'currentsituation'},customerid_account:{b:'customerid_account',a:'_customerid_value',c:'accounts',d:'account'},customerid_contact:{b:'customerid_contact',a:'_customerid_value',c:'contacts',d:'contact'},CustomerNeed:{a:'customerneed'},CustomerPainPoints:{a:'customerpainpoints'},DecisionMaker:{a:'decisionmaker'},Description:{a:'description'},DevelopProposal:{a:'developproposal'},DiscountAmount:{a:'discountamount'},DiscountAmount_Base:{a:'discountamount_base',r:!0},DiscountPercentage:{a:'discountpercentage'},EmailAddress:{a:'emailaddress'},EstimatedCloseDate_DateOnly:{a:'estimatedclosedate'},EstimatedValue:{a:'estimatedvalue'},EstimatedValue_Base:{a:'estimatedvalue_base',r:!0},EvaluateFit:{a:'evaluatefit'},ExchangeRate:{a:'exchangerate',r:!0},FileDebrief:{a:'filedebrief'},FinalDecisionDate_DateOnly:{a:'finaldecisiondate'},FreightAmount:{a:'freightamount'},FreightAmount_Base:{a:'freightamount_base',r:!0},IdentifyCompetitors:{a:'identifycompetitors'},IdentifyCustomerContacts:{a:'identifycustomercontacts'},IdentifyPursuitTeam:{a:'identifypursuitteam'},ImportSequenceNumber:{a:'importsequencenumber'},InitialCommunication:{a:'initialcommunication'},IsPrivate:{a:'isprivate',r:!0},IsRevenueSystemCalculated:{a:'isrevenuesystemcalculated'},LastOnHoldTime_UtcDateAndTime:{a:'lastonholdtime'},ModifiedBy:{b:'modifiedby',a:'_modifiedby_value',c:'systemusers',d:'systemuser',r:!0},ModifiedOn_UtcDateAndTime:{a:'modifiedon',r:!0},ModifiedOnBehalfBy:{b:'modifiedonbehalfby',a:'_modifiedonbehalfby_value',c:'systemusers',d:'systemuser',r:!0},Name:{a:'name'},Need:{a:'need'},OnHoldTime:{a:'onholdtime',r:!0},OpportunityId:{a:'opportunityid'},OpportunityRatingCode:{a:'opportunityratingcode'},OriginatingLeadId:{b:'originatingleadid',a:'_originatingleadid_value',c:'leads',d:'lead'},OverriddenCreatedOn_UtcDateOnly:{a:'overriddencreatedon'},OwnerId_systemuser:{b:'ownerid',a:'_ownerid_value',c:'systemusers',d:'systemuser'},OwnerId_team:{b:'ownerid',a:'_ownerid_value',c:'teams',d:'team'},OwningBusinessUnit:{b:'owningbusinessunit',a:'_owningbusinessunit_value',c:'businessunits',d:'businessunit',r:!0},OwningTeam:{b:'owningteam',a:'_owningteam_value',c:'teams',d:'team',r:!0},OwningUser:{b:'owninguser',a:'_owninguser_value',c:'systemusers',d:'systemuser',r:!0},ParentAccountId:{b:'parentaccountid',a:'_parentaccountid_value',c:'accounts',d:'account'},ParentContactId:{b:'parentcontactid',a:'_parentcontactid_value',c:'contacts',d:'contact'},ParticipatesInWorkflow:{a:'participatesinworkflow'},PresentFinalProposal:{a:'presentfinalproposal'},PresentProposal:{a:'presentproposal'},PriceLevelId:{b:'pricelevelid',a:'_pricelevelid_value',c:'pricelevels',d:'pricelevel'},PricingErrorCode:{a:'pricingerrorcode'},PriorityCode:{a:'prioritycode'},ProcessId:{a:'processid'},ProposedSolution:{a:'proposedsolution'},PurchaseProcess:{a:'purchaseprocess'},PurchaseTimeframe:{a:'purchasetimeframe'},PursuitDecision:{a:'pursuitdecision'},QualificationComments:{a:'qualificationcomments'},QuoteComments:{a:'quotecomments'},ResolveFeedback:{a:'resolvefeedback'},SalesStage:{a:'salesstage'},SalesStageCode:{a:'salesstagecode'},ScheduleFollowup_Prospect_UtcDateOnly:{a:'schedulefollowup_prospect'},ScheduleFollowup_Qualify_UtcDateOnly:{a:'schedulefollowup_qualify'},ScheduleProposalMeeting_UtcDateOnly:{a:'scheduleproposalmeeting'},SendThankYouNote:{a:'sendthankyounote'},SLAId:{b:'slaid',a:'_slaid_value',c:'slas',d:'sla'},SLAInvokedId:{b:'slainvokedid',a:'_slainvokedid_value',c:'slas',d:'sla',r:!0},StageId:{a:'stageid'},StateCode:{a:'statecode'},StatusCode:{a:'statuscode'},StepId:{a:'stepid'},StepName:{a:'stepname'},TeamsFollowed:{a:'teamsfollowed'},TimeLine:{a:'timeline'},TimeSpentByMeOnEmailAndMeetings:{a:'timespentbymeonemailandmeetings',r:!0},TimeZoneRuleVersionNumber:{a:'timezoneruleversionnumber'},TotalAmount:{a:'totalamount'},TotalAmount_Base:{a:'totalamount_base',r:!0},TotalAmountLessFreight:{a:'totalamountlessfreight'},TotalAmountLessFreight_Base:{a:'totalamountlessfreight_base',r:!0},TotalDiscountAmount:{a:'totaldiscountamount'},TotalDiscountAmount_Base:{a:'totaldiscountamount_base',r:!0},TotalLineItemAmount:{a:'totallineitemamount'},TotalLineItemAmount_Base:{a:'totallineitemamount_base',r:!0},TotalLineItemDiscountAmount:{a:'totallineitemdiscountamount'},TotalLineItemDiscountAmount_Base:{a:'totallineitemdiscountamount_base',r:!0},TotalTax:{a:'totaltax'},TotalTax_Base:{a:'totaltax_base',r:!0},TransactionCurrencyId:{b:'transactioncurrencyid',a:'_transactioncurrencyid_value',c:'transactioncurrencies',d:'transactioncurrency'},TraversedPath:{a:'traversedpath'},UTCConversionTimeZoneCode:{a:'utcconversiontimezonecode'},VersionNumber:{a:'versionnumber',r:!0}},u,f,i,e;if(arguments.length>1)for(u=1;u<arguments.length;u++)Object.assign(t,arguments[u]);n===undefined&&(n={});f={};for(i in t){var s=t[i].a,h=t[i].b,c=t[i].c,l=t[i].d,a=t[i].r;t[i]=o(n,s,h,c,l,a,f)}return t.Entity=f,t.EntityName='opportunity',t.EntityCollectionName='opportunities',e={BudgetStatus:{No_Committed_Budget:0,May_Buy:1,Can_Buy:2,Will_Buy:3},InitialCommunication:{Contacted:0,Not_Contacted:1},Need:{Must_have:0,Should_have:1,Good_to_have:2,No_need:3},OpportunityRatingCode:{Hot:1,Warm:2,Cold:3},PricingErrorCode:{None:0,Detail_Error:1,Missing_Price_Level:2,Inactive_Price_Level:3,Missing_Quantity:4,Missing_Unit_Price:5,Missing_Product:6,Invalid_Product:7,Missing_Pricing_Code:8,Invalid_Pricing_Code:9,Missing_UOM:10,Product_Not_In_Price_Level:11,Missing_Price_Level_Amount:12,Missing_Price_Level_Percentage:13,Missing_Price:14,Missing_Current_Cost:15,Missing_Standard_Cost:16,Invalid_Price_Level_Amount:17,Invalid_Price_Level_Percentage:18,Invalid_Price:19,Invalid_Current_Cost:20,Invalid_Standard_Cost:21,Invalid_Rounding_Policy:22,Invalid_Rounding_Option:23,Invalid_Rounding_Amount:24,Price_Calculation_Error:25,Invalid_Discount_Type:26,Discount_Type_Invalid_State:27,Invalid_Discount:28,Invalid_Quantity:29,Invalid_Pricing_Precision:30,Missing_Product_Default_UOM:31,Missing_Product_UOM_Schedule_:32,Inactive_Discount_Type:33,Invalid_Price_Level_Currency:34,Price_Attribute_Out_Of_Range:35,Base_Currency_Attribute_Overflow:36,Base_Currency_Attribute_Underflow:37,Transaction_currency_is_not_set_for_the_product_price_list_item:38},PriorityCode:{Default_Value:1},PurchaseProcess:{Individual:0,Committee:1,Unknown:2},PurchaseTimeframe:{Immediate:0,This_Quarter:1,Next_Quarter:2,This_Year:3,Unknown:4},SalesStage:{Qualify:0,Develop:1,Propose:2,Close:3},SalesStageCode:{Default_Value:1},StateCode:{Open:0,Won:1,Lost:2},StatusCode:{In_Progress:1,On_Hold:2,Won:3,Canceled:4,Out_Sold:5},TimeLine:{Immediate:0,This_Quarter:1,Next_Quarter:2,This_Year:3,Not_known:4}},t.OptionSet=e,t}})(LuckeyMonkey||(LuckeyMonkey={}))