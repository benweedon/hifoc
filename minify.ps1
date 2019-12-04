param(
    [String] $InputFile = "loader.js"
)

# documentation at https://www.npmjs.com/package/terser
$terserOutput = terser $InputFile `
    --compress ecma=6,negate_iife=false,passes=5,toplevel=true,warnings=true `
    --mangle toplevel=true

$bookmarkletOutput = "javascript:" + $terserOutput
$outputFile = $InputFile -replace ".js$",".min.js"

Out-File -InputObject $bookmarkletOutput -FilePath $outputFile -Encoding utf8
