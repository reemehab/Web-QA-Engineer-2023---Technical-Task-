module.exports = {
"Searchig for a dress" : (browser)=>{
browser.url("http://automationpractice.multiformis.com/index.php")
.setValue('#search_query_top', 'dress')
.click('#searchbox > button')
.waitForElementVisible('#product_list', 5000)
.elements('css selector', '#product_list li.ajax_block_product', function(result) {
  const itemCount = result.value.length;
  console.log('Number of list items:', itemCount);
  browser.assert.equal(itemCount, 7, `Expected 7 list items, but found ${itemCount}`);
})
.end();
},

}