// var should = require("chai").should()
var expect = require("chai").expect
var pad = require("./index")

describe('pad', function(){
  it('returns a padded result', function(){
    expect(pad(30, 3)).to.equal("030");
  });
  it('can receive a number String as an argument', function(){
    expect(pad("30", 3)).to.equal("030");
  });
  it('can receive a Number as an argument', function(){
    expect(pad(30, 3)).to.equal("030");
  });
})
