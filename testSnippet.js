Test.describe("Basic tests",function() {
    Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
    Test.assertSimilar(listSquared(42, 250), [[42, 2500], [246, 84100]])
    Test.assertSimilar(listSquared(250, 500), [[287, 84100]])
    
    })