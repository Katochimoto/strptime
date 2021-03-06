(function(strptime) {

    strptime.locale = {
        'a': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'A': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'b': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'B': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'f': ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
        'c': '%Y-%m-%d %H:%M:%S',
        'P': ['am', 'pm'],
        'r': '%I:%M:%S %p',
        'x': '%m/%d/%y',
        'X': '%H:%M:%S',
        'day': ['Yesterday', 'Today', 'Tomorrow'],

        // алиас падежа обязательно указать после обозначения
        'bg': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'Bg': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'fg': ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],

        'Date_dBY_year_in_HM': '%#B %-d, %Y at %-H:%M',
        'Date_dBY_year': '%#B %-d, %Y',
        'Date_dBY': '%#B %-d, %Y',
        'Date_AdBY': '%A, %#B %-d, %Y',
        'Date_dBA': '%#B %-d, %A',
        'Date_df_in_HM': '%#f, %-d at %-H:%M',
        'Date_dfY': '%-d %#f %Y',
        'Date_dB_in_HM': '%#B %-d at %-H:%M',
        'Date_df': '%-d %#f'
    };

}(strptime));

