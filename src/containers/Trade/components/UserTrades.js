import React from 'react';

import { Table } from '../../../components';
import {
	generateTradeHeaders,
	generateLessTradeHeaders
} from '../../TransactionsHistory/utils';

const ActiveOrders = ({ trades, pairData, pair, lessHeaders }) => {
	const headers = lessHeaders
		? generateLessTradeHeaders(pairData.pair_base)
		: generateTradeHeaders(pairData.pair_base);
	if (!pair) {
		return <div />;
	}
	return (
		<div className="trade_active_orders-wrapper">
			<Table
				headers={headers}
				data={trades}
				count={trades.length}
				pageSize={5}
				displayPaginator={false}
			/>
		</div>
	);
};

ActiveOrders.defaultProps = {
	trades: [],
	pair: '',
	pairData: {}
};
export default ActiveOrders;
