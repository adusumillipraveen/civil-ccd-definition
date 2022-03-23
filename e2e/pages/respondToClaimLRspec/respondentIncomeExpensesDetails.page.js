const {I} = inject();

module.exports = {
  fields: {
    selectIncomeExpensesType: {
      id: '#respondent1DQCarerAllowanceCredit_No',
      options: {
        yes: 'Yes',
        no: 'No'
      },
    },
  },

  async selectIncomeExpenses() {
    await within(this.fields.selectIncomeExpensesType.id, () => {
    I.click(this.fields.selectIncomeExpensesType.options.no);
    });
    await I.clickContinue();
  }
};
