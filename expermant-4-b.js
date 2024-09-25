var app = angular.module("app", []);
app.controller("cont", function ($scope) {
  $scope.bills = [];
  $scope.addBill = function () {
    $scope.bills.push({
      id: $scope.userId,
      username: $scope.userName,
      amount: $scope.userAmount,
      date: $scope.dueDate,
      status: $scope.select,
    });
    $scope.userId = null;
    $scope.userName = null;
    $scope.userAmount = null;
    $scope.dueDate = null;
    $scope.select = null;
  };

  $scope.deleteBill = function (index) {
    $scope.bills.splice(index, 1);
  };

  $scope.editBill = function (bill, index) {
    $scope.userId = bill.id;
    $scope.userName = bill.username;
    $scope.userAmount = bill.amount;
    $scope.dueDate = bill.date;
    $scope.select = bill.status;

    $scope.bills.splice(index, 1);
  };
});
