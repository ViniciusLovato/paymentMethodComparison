class Calculator {
  generateChartData = (total, nInstallments, installmentsValue, rate) => {

    total = parseFloat(total);
    nInstallments = parseInt(nInstallments);
    installmentsValue = parseFloat(installmentsValue);
    rate = parseFloat(rate);

    let revenuePerMonth = [];
    let absolute = 0.0;
    for (let i = 0; i < nInstallments; i++) {
      total = total + (total * rate);
      total = total - installmentsValue;

      absolute = absolute + (total * rate);

      revenuePerMonth[i] = {
        total: total.toFixed(2),
        absolute: absolute.toFixed(2)
      };
    }

    return revenuePerMonth;
  }

  generateInterest = (total, nInstallments, installmentsValue) => {

    total = parseFloat(total);
    nInstallments = parseInt(nInstallments);
    installmentsValue = parseFloat(installmentsValue);


    let interest = Math.pow((installmentsValue * nInstallments / total), 1 / nInstallments) - 1;
    return interest;
  }

  generateTaxMonths = (total, nInstallments, installmentsValue) => {
    return ((nInstallments * installmentsValue) - total) / installmentsValue;
  }
}

export default new Calculator();