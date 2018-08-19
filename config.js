const config = {
  csv: {
    // If true, the parser will attempt to convert input string to native types. If a function, receive the value as first argument, a context as second argument and return a new value.
    // cast: false,

    // If true, the parser will attempt to convert input string to dates. If a function, receive the value as argument and return a new value. It requires the "auto_parse" option.
    // cast_date: false,

    //  List of fields as an array, a user defined callback accepting the first line and returning the column names, or true if autodiscovered in the first CSV line. Defaults to null.
    columns: ['orderId', 'customerId', 'item', 'quantity'],

    // Treat all the characters after this one as a comment. Defaults to ''.
    // comment: '',

    // Set the field delimiter. One character only. Defaults to "," (comma).
    // delimiter: '',

    // Set the escape character. One character only. Defaults to double quote.
    // escape: '',

    // Start returning records from a particular line.
    // from: '',

    // If true, ignore whitespace immediately following the delimiter (i.e. left-trim all fields). Defaults to false.
    // ltrim: false,

    // Maximum numer of characters to be contained in the field and line buffers before an exception is raised. Used to guard against a wrong delimiter or rowDelimiter. Default to 128,000 characters.
    // max_limit_on_data_read: 128000,

    // Name of header-record title to name objects by.
    // objname: 'orders',

    // Optional character surrounding a field. One character only. Disabled if null, false or empty. Defaults to double quote.
    // quote: false,

    // Discard inconsistent columns count. Default to false.
    // relax_column_count: false,

    // Generate two properties raw and row where raw is the original CSV row content and row is the parsed array or object.
    // raw: true,

    // One or multiple characters used to delimit record rows; defaults to auto discovery if not provided. Suported auto disvovery method are Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters.
    // rowDelimiter: '',

    // If true, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields). Defaults to false. Does not remove whitespace in a quoted field.
    // rtrim: false,

    // Don't generate records for empty lines (line matching /\s*/), defaults to false.
    // skip_empty_lines: false,

    // Skip a line with error found inside and directly go process the next line.
    // skip_lines_with_error: false,

    // Don't generate records for lines containing empty column values (column matching /\s*/), defaults to false.
    // skip_lines_with_empty_values: false,

    // Stop returning records after a particular line.
    // to: '',

    // If true, ignore whitespace immediately around the delimiter. Defaults to false. Does not remove whitespace in a quoted field.
    trim: true,
  },
};

module.exports = config;
