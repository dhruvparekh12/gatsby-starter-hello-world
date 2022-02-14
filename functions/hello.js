"use strict";

module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your executed! Test hello",
        randomNum: Math.floor(Math.random()*100).toString(),
        input: event,
      },
      null,
      2
    ),
  };
};
