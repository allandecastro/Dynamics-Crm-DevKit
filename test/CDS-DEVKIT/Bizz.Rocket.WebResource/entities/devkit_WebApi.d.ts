﻿///<reference path='devkit.d.ts' />
declare namespace Rocket {
	class devkit_WebApiApi {
		/**
		* PL.DynamicsCrm.DevKit devkit_WebApiApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** ReadOnly - Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		devkit_AlternateKey: DevKit.WebApi.StringValue;
		devkit_Currency: DevKit.WebApi.MoneyValue;
		/** ReadOnly - Value of the Currency in base currency. */
		devkit_currency_Base: DevKit.WebApi.MoneyValue;
		devkit_CustomerId_account: DevKit.WebApi.LookupValue;
		devkit_CustomerId_contact: DevKit.WebApi.LookupValue;
		devkit_DateOnlyDateOnly_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** ReadOnly */
		devkit_DateOnlyDateOnlyCalculated_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** ReadOnly */
		devkit_DateOnlyDateOnlyRollup_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** ReadOnly - Last Updated time of rollup field Date Only Date Only Rollup. */
		devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - State of rollup field Date Only Date Only Rollup. */
		devkit_DateOnlyDateOnlyRollup_State: DevKit.WebApi.IntegerValue;
		devkit_DecimalNumber: DevKit.WebApi.DecimalValue;
		devkit_FloatingPointNumber: DevKit.WebApi.DoubleValue;
		devkit_LinkWebApiId: DevKit.WebApi.LookupValue;
		devkit_MultiOptionSetCode: DevKit.WebApi.MultiOptionSetValue;
		devkit_MultipleLiniesofText: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		devkit_Name: DevKit.WebApi.StringValue;
		devkit_ParentWebApiId: DevKit.WebApi.LookupValue;
		devkit_SingleLineofTextEmail: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextPhone: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextText: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextTextArea: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextTickerSymbol: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextUrl: DevKit.WebApi.StringValue;
		devkit_SingleOptionSetCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly */
		devkit_SingleOptionSetCodeCalculated: DevKit.WebApi.OptionSetValue;
		devkit_TimeZoneDateAndTime_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** ReadOnly */
		devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** ReadOnly */
		devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** ReadOnly - Last Updated time of rollup field TimeZone Date And Time Rollup. */
		devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - State of rollup field TimeZone Date And Time Rollup. */
		devkit_TimeZoneDateAndTimeRollup_State: DevKit.WebApi.IntegerValue;
		devkit_TimeZoneDateOnly_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue;
		/** ReadOnly */
		devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue;
		/** ReadOnly */
		devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue;
		/** ReadOnly - Last Updated time of rollup field TimeZone Date Only Rollup. */
		devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - State of rollup field TimeZone Date Only Rollup. */
		devkit_TimeZoneDateOnlyRollup_State: DevKit.WebApi.IntegerValue;
		devkit_UserLocalDateAndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly */
		devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly */
		devkit_UserLocalDateAndTimeRollup_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Last Updated time of rollup field User Local Date And Time Rollup. */
		devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - State of rollup field User Local Date And Time Rollup. */
		devkit_UserLocalDateAndTimeRollup_State: DevKit.WebApi.IntegerValue;
		devkit_UserLocalDateOnly_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** ReadOnly */
		devkit_UserLocalDateOnlyCalculated_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** ReadOnly */
		devkit_UserLocalDateOnlyRollup_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** ReadOnly - Last Updated time of rollup field User Local Date Only Rollup. */
		devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - State of rollup field User Local Date Only Rollup. */
		devkit_UserLocalDateOnlyRollup_State: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		devkit_WebApiId: DevKit.WebApi.GuidValue;
		devkit_WholeNumberDuration: DevKit.WebApi.IntegerValue;
		devkit_WholeNumberLanguage: DevKit.WebApi.IntegerValue;
		devkit_WholeNumberNone: DevKit.WebApi.IntegerValue;
		devkit_WholeNumberTimeZone: DevKit.WebApi.IntegerValue;
		devkit_YesAndNo: DevKit.WebApi.BooleanValue;
		/** ReadOnly */
		devkit_YesAndNoCalculated: DevKit.WebApi.BooleanValue;
		EntityImage: DevKit.WebApi.StringValue;
		/** ReadOnly */
		EntityImage_Timestamp: DevKit.WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: DevKit.WebApi.StringValue;
		/** ReadOnly */
		EntityImageId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Status of the WebApi */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the WebApi */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Version Number */
		VersionNumber: DevKit.WebApi.BigIntValue;
	}
}
declare namespace OptionSet {
	namespace devkit_WebApi {
		enum devkit_MultiOptionSetCode {
			/** 100000000 */
			Crm_4,
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000005 */
			Dynamics_365
		}
		enum devkit_SingleOptionSetCode {
			/** 100000000 */
			Crm_4,
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000005 */
			Dynamics_365
		}
		enum devkit_SingleOptionSetCodeCalculated {
			/** 100000000 */
			Crm_4,
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000005 */
			Dynamics_365
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 100000000 */
			Active_2,
			/** 100000001 */
			Active_3,
			/** 2 */
			Inactive,
			/** 100000002 */
			Inactive_2,
			/** 100000003 */
			Inactive_3
		}
	}
}
//{'JsForm':['WebApi'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}