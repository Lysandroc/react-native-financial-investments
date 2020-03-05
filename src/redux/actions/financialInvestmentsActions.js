import { FETCH_INVESTMENT_RECORD, SET_INVESTMENT_RECORD, SET_FAILURE_INVESTMENT_RECORD } from './actionTypes';

export const fetchInvestmentRecord = () => ({
	type: FETCH_INVESTMENT_RECORD,
});

export const setInvestmentRecord = payload => ({
	type: SET_INVESTMENT_RECORD,
	payload,
});

export const setFailure = payload => ({
	type: SET_FAILURE_INVESTMENT_RECORD,
	payload,
});