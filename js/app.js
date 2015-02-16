// Generated by CoffeeScript 1.8.0
(function() {
  var hexAnalyzer, hexAnalyzerConfig, loadCompleteCallback;

  loadCompleteCallback = function() {
    console.log("load complete");
    return console.log(hexAnalyzer.getBin());
  };

  hexAnalyzerConfig = {
    selectFileId: $('#select-file'),
    filePathDisplayId: $('#file-path'),
    loadCompleteCallback: loadCompleteCallback
  };

  hexAnalyzer = new HexAnalyzer(hexAnalyzerConfig);

}).call(this);