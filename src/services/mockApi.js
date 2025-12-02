const DATABASE = [
    { 
        id: 1, 
        title: "Annual Percentage Rate (APR)", 
        snippet: "The annual rate charged for borrowing or earned through an investment.", 
        details: "APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction."
    },
    { 
        id: 2, 
        title: "Bull Market", 
        snippet: "A market condition where prices are rising or are expected to rise.", 
        details: "The term 'bull market' is most often used to refer to the stock market but can be applied to anything that is traded, such as bonds, real estate, currencies, and commodities."
    },
    { 
        id: 3, 
        title: "Capital Gains Tax", 
        snippet: "A tax on the growth in value of investments incurred when individuals and corporations sell those investments.", 
        details: "When the assets are sold, the capital gains are referred to as having been 'realized.' The tax does not apply to unsold investments or 'unrealized capital gains.'"
    },
    { 
        id: 4, 
        title: "Diversification", 
        snippet: "A risk management strategy that mixes a wide variety of investments within a portfolio.", 
        details: "The rationale behind this technique is that a portfolio constructed of different kinds of assets will, on average, yield higher long-term returns and lower the risk of any individual holding or security."
    },
    { 
        id: 5, 
        title: "Equity", 
        snippet: "The value of the shares issued by a company.", 
        details: "Equity is the amount of money that represents the ownership in a company. It can be found on a company's balance sheet and is one of the most common pieces of data used by analysts to assess the financial health of a company."
    }
];

export const searchService = {
    async search(query) {
        return new Promise((resolve) => {
            const delay = Math.random() * 500 + 300;

            setTimeout(() => {
                if (!query) {
                    resolve([]);
                    return;
                }

                const lowerQuery = query.toLowerCase();
                const results = DATABASE.filter(item => 
                    item.title.toLowerCase().includes(lowerQuery) || 
                    item.snippet.toLowerCase().includes(lowerQuery)
                );
                
                resolve(results);
            }, delay);
        });
    }
};