All Men's ICC Men's T20 World Cup match data in CSV format
==========================================================

The background
--------------

As an experiment, after being asked by a user of the site, I started
converting the YAML data provided on the site into a CSV format. That
initial version was heavily influenced by the format used by the baseball
project Retrosheet. I wasn't sure of the usefulness of my CSV format, but
nothing better was suggested so I persisted with it. Later Ashwin Raman
(https://twitter.com/AshwinRaman_) send me a detailed example of a format
he felt might work and, liking what I saw, I started to produce data in
a slightly modified version of that initial example.

This particular zip folder contains the CSV data for...
  All Men's ICC Men's T20 World Cup matches
...for which we have data.

How you can help
----------------

Providing feedback on the data would be the most helpful. Tell me what you
like and what you don't. Is there anything that is in the JSON data that
you'd like to be included in the CSV? Could something be included in a better
format? General views and comments help, as well as incredibly detailed
feedback. All information is of use to me at this stage. I can only improve
the data if people tell me what does works and what doesn't. I'd like to make
the data as useful as possible but I need your help to do it. Also, which of
the 2 CSV formats do you prefer, this one or the original? Ideally I'd like
to settle on a single CSV format so what should be kept from each?

Finally, any feedback as to the licence the data should be released under
would be greatly appreciated. Licensing is a strange little world and I'd
like to choose the "right" licence. My basic criteria may be that:

  * the data should be free,
  * corrections are encouraged/required to be reported to the project,
  * derivative works are allowed,
  * you can't just take data and sell it.

Feedback, pointers, comments, etc on licensing are welcome.

The format of the data
----------------------

Full documentation of this CSV format can be found at:
  https://cricsheet.org/format/csv_ashwin/
but the following is a brief summary of the details...

This format consists of 2 files per match, although you can get all of
the ball-by-ball data from just one of the files. The files for a match
are named <id>.csv (for the ball-by-ball data), and <id>_info.csv (for
the match info), where <id> is the Cricinfo id for the match. The
ball-by-ball file contains one row per delivery in the match, while the
match info file contains match information such as dates the match was
played, the outcome, and lists of the players involved in the match.

The match info file format
--------------------------

The info section contains the information on the actual match, such as
when and where it was played, any event it was part of, the type of
match etc. The fields included in the info section will each appear as
one or more rows in the data. Some of the fields are required, whereas
some are optional. If a field has multiple values, such as team, then
each value will appear on a row of it's own.

The ball-by-ball file format
----------------------------

The first row of each ball-by-ball CSV file contains the headers for the
file, with each subsequent row providing details on a single delivery.
The headers in the file are:

  * match_id
  * season
  * start_date
  * venue
  * innings
  * ball
  * batting_team
  * bowling_team
  * striker
  * non_striker
  * bowler
  * runs_off_bat
  * extras
  * wides
  * noballs
  * byes
  * legbyes
  * penalty
  * wicket_type
  * player_dismissed
  * other_wicket_type
  * other_player_dismissed

Most of the fields above should, hopefully, be self-explanatory, but some may
benefit from clarification...

"innings" contains the number of the innings within the match. If a match is
one that would normally have 2 innings, such as a T20 or ODI, then any innings
of more than 2 can be regarded as a super over.

"ball" is a combination of the over and delivery. For example, "0.3" represents
the 3rd ball of the 1st over.

"wides", "noballs", "byes", "legbyes", and "penalty" contain the total of each
particular type of extras, or are blank if not relevant to the delivery.

If a wicket occurred on a delivery then "wicket_type" will contain the method
of dismissal, while "player_dismissed" will indicate who was dismissed. There
is also the, admittedly remote, possibility that a second dismissal can be
recorded on the delivery (such as when a player retires on the same delivery
as another dismissal occurs). In this case "other_wicket_type" will record
the reason, while "other_player_dismissed" will show who was dismissed.

Matches included in this archive
--------------------------------

2024-06-29 - international - T20 - male - 1415755 - India vs South Africa
2024-06-27 - international - T20 - male - 1415754 - India vs England
2024-06-26 - international - T20 - male - 1415753 - Afghanistan vs South Africa
2024-06-24 - international - T20 - male - 1415751 - India vs Australia
2024-06-24 - international - T20 - male - 1415752 - Afghanistan vs Bangladesh
2024-06-23 - international - T20 - male - 1415749 - United States of America vs England
2024-06-23 - international - T20 - male - 1415750 - West Indies vs South Africa
2024-06-22 - international - T20 - male - 1415747 - India vs Bangladesh
2024-06-22 - international - T20 - male - 1415748 - Afghanistan vs Australia
2024-06-21 - international - T20 - male - 1415745 - South Africa vs England
2024-06-21 - international - T20 - male - 1415746 - United States of America vs West Indies
2024-06-20 - international - T20 - male - 1415743 - India vs Afghanistan
2024-06-20 - international - T20 - male - 1415744 - Bangladesh vs Australia
2024-06-19 - international - T20 - male - 1415741 - South Africa vs United States of America
2024-06-19 - international - T20 - male - 1415742 - West Indies vs England
2024-06-17 - international - T20 - male - 1415739 - Papua New Guinea vs New Zealand
2024-06-17 - international - T20 - male - 1415740 - West Indies vs Afghanistan
2024-06-16 - international - T20 - male - 1415736 - Ireland vs Pakistan
2024-06-16 - international - T20 - male - 1415737 - Bangladesh vs Nepal
2024-06-16 - international - T20 - male - 1415738 - Sri Lanka vs Netherlands
2024-06-15 - international - T20 - male - 1415734 - England vs Namibia
2024-06-15 - international - T20 - male - 1415735 - Scotland vs Australia
2024-06-14 - international - T20 - male - 1415731 - South Africa vs Nepal
2024-06-14 - international - T20 - male - 1415732 - Uganda vs New Zealand
2024-06-13 - international - T20 - male - 1415727 - Bangladesh vs Netherlands
2024-06-13 - international - T20 - male - 1415728 - Oman vs England
2024-06-13 - international - T20 - male - 1415729 - Papua New Guinea vs Afghanistan
2024-06-12 - international - T20 - male - 1415725 - United States of America vs India
2024-06-12 - international - T20 - male - 1415726 - West Indies vs New Zealand
2024-06-11 - international - T20 - male - 1415722 - Canada vs Pakistan
2024-06-11 - international - T20 - male - 1415724 - Namibia vs Australia
2024-06-10 - international - T20 - male - 1415721 - South Africa vs Bangladesh
2024-06-09 - international - T20 - male - 1415719 - India vs Pakistan
2024-06-09 - international - T20 - male - 1415720 - Oman vs Scotland
2024-06-08 - international - T20 - male - 1415716 - Netherlands vs South Africa
2024-06-08 - international - T20 - male - 1415717 - Australia vs England
2024-06-08 - international - T20 - male - 1415718 - West Indies vs Uganda
2024-06-07 - international - T20 - male - 1415713 - Canada vs Ireland
2024-06-07 - international - T20 - male - 1415714 - Afghanistan vs New Zealand
2024-06-07 - international - T20 - male - 1415715 - Sri Lanka vs Bangladesh
2024-06-06 - international - T20 - male - 1415711 - Pakistan vs United States of America
2024-06-06 - international - T20 - male - 1415712 - Namibia vs Scotland
2024-06-05 - international - T20 - male - 1415708 - Ireland vs India
2024-06-05 - international - T20 - male - 1415709 - Papua New Guinea vs Uganda
2024-06-05 - international - T20 - male - 1415710 - Australia vs Oman
2024-06-04 - international - T20 - male - 1415706 - Scotland vs England
2024-06-04 - international - T20 - male - 1415707 - Nepal vs Netherlands
2024-06-03 - international - T20 - male - 1415704 - Sri Lanka vs South Africa
2024-06-03 - international - T20 - male - 1415705 - Afghanistan vs Uganda
2024-06-02 - international - T20 - male - 1415702 - Papua New Guinea vs West Indies
2024-06-02 - international - T20 - male - 1415703 - Oman vs Namibia
2024-06-01 - international - T20 - male - 1415701 - Canada vs United States of America
2022-11-13 - international - T20 - male - 1298179 - Pakistan vs England
2022-11-10 - international - T20 - male - 1298178 - India vs England
2022-11-09 - international - T20 - male - 1298177 - New Zealand vs Pakistan
2022-11-06 - international - T20 - male - 1298174 - Netherlands vs South Africa
2022-11-06 - international - T20 - male - 1298175 - Bangladesh vs Pakistan
2022-11-06 - international - T20 - male - 1298176 - India vs Zimbabwe
2022-11-05 - international - T20 - male - 1298173 - Sri Lanka vs England
2022-11-04 - international - T20 - male - 1298171 - New Zealand vs Ireland
2022-11-04 - international - T20 - male - 1298172 - Australia vs Afghanistan
2022-11-03 - international - T20 - male - 1298170 - Pakistan vs South Africa
2022-11-02 - international - T20 - male - 1298168 - Zimbabwe vs Netherlands
2022-11-02 - international - T20 - male - 1298169 - India vs Bangladesh
2022-11-01 - international - T20 - male - 1298166 - Afghanistan vs Sri Lanka
2022-11-01 - international - T20 - male - 1298167 - England vs New Zealand
2022-10-31 - international - T20 - male - 1298165 - Australia vs Ireland
2022-10-30 - international - T20 - male - 1298162 - Bangladesh vs Zimbabwe
2022-10-30 - international - T20 - male - 1298163 - Netherlands vs Pakistan
2022-10-30 - international - T20 - male - 1298164 - India vs South Africa
2022-10-29 - international - T20 - male - 1298161 - New Zealand vs Sri Lanka
2022-10-27 - international - T20 - male - 1298156 - South Africa vs Bangladesh
2022-10-27 - international - T20 - male - 1298157 - India vs Netherlands
2022-10-27 - international - T20 - male - 1298158 - Zimbabwe vs Pakistan
2022-10-26 - international - T20 - male - 1298154 - Ireland vs England
2022-10-25 - international - T20 - male - 1298153 - Sri Lanka vs Australia
2022-10-24 - international - T20 - male - 1298151 - Bangladesh vs Netherlands
2022-10-24 - international - T20 - male - 1298152 - Zimbabwe vs South Africa
2022-10-23 - international - T20 - male - 1298149 - Ireland vs Sri Lanka
2022-10-23 - international - T20 - male - 1298150 - Pakistan vs India
2022-10-22 - international - T20 - male - 1298147 - New Zealand vs Australia
2022-10-22 - international - T20 - male - 1298148 - Afghanistan vs England
2022-10-21 - international - T20 - male - 1298145 - West Indies vs Ireland
2022-10-21 - international - T20 - male - 1298146 - Scotland vs Zimbabwe
2022-10-20 - international - T20 - male - 1298143 - Sri Lanka vs Netherlands
2022-10-20 - international - T20 - male - 1298144 - United Arab Emirates vs Namibia
2022-10-19 - international - T20 - male - 1298141 - Scotland vs Ireland
2022-10-19 - international - T20 - male - 1298142 - West Indies vs Zimbabwe
2022-10-18 - international - T20 - male - 1298139 - Namibia vs Netherlands
2022-10-18 - international - T20 - male - 1298140 - Sri Lanka vs United Arab Emirates
2022-10-17 - international - T20 - male - 1298137 - Scotland vs West Indies
2022-10-17 - international - T20 - male - 1298138 - Zimbabwe vs Ireland
2022-10-16 - international - T20 - male - 1298135 - Namibia vs Sri Lanka
2022-10-16 - international - T20 - male - 1298136 - United Arab Emirates vs Netherlands
2021-11-14 - international - T20 - male - 1273756 - New Zealand vs Australia
2021-11-11 - international - T20 - male - 1273755 - Pakistan vs Australia
2021-11-10 - international - T20 - male - 1273754 - England vs New Zealand
2021-11-08 - international - T20 - male - 1273753 - Namibia vs India
2021-11-07 - international - T20 - male - 1273751 - Afghanistan vs New Zealand
2021-11-07 - international - T20 - male - 1273752 - Pakistan vs Scotland
2021-11-06 - international - T20 - male - 1273749 - West Indies vs Australia
2021-11-06 - international - T20 - male - 1273750 - South Africa vs England
2021-11-05 - international - T20 - male - 1273747 - New Zealand vs Namibia
2021-11-05 - international - T20 - male - 1273748 - Scotland vs India
2021-11-04 - international - T20 - male - 1273745 - Bangladesh vs Australia
2021-11-04 - international - T20 - male - 1273746 - Sri Lanka vs West Indies
2021-11-03 - international - T20 - male - 1273743 - New Zealand vs Scotland
2021-11-03 - international - T20 - male - 1273744 - India vs Afghanistan
2021-11-02 - international - T20 - male - 1273741 - Bangladesh vs South Africa
2021-11-02 - international - T20 - male - 1273742 - Pakistan vs Namibia
2021-11-01 - international - T20 - male - 1273740 - England vs Sri Lanka
2021-10-31 - international - T20 - male - 1273738 - Afghanistan vs Namibia
2021-10-31 - international - T20 - male - 1273739 - India vs New Zealand
2021-10-30 - international - T20 - male - 1273736 - Sri Lanka vs South Africa
2021-10-30 - international - T20 - male - 1273737 - Australia vs England
2021-10-29 - international - T20 - male - 1273734 - West Indies vs Bangladesh
2021-10-29 - international - T20 - male - 1273735 - Afghanistan vs Pakistan
2021-10-28 - international - T20 - male - 1273733 - Sri Lanka vs Australia
2021-10-27 - international - T20 - male - 1273731 - Bangladesh vs England
2021-10-27 - international - T20 - male - 1273732 - Scotland vs Namibia
2021-10-26 - international - T20 - male - 1273729 - West Indies vs South Africa
2021-10-26 - international - T20 - male - 1273730 - New Zealand vs Pakistan
2021-10-25 - international - T20 - male - 1273728 - Afghanistan vs Scotland
2021-10-24 - international - T20 - male - 1273726 - Bangladesh vs Sri Lanka
2021-10-24 - international - T20 - male - 1273727 - India vs Pakistan
2021-10-23 - international - T20 - male - 1273724 - South Africa vs Australia
2021-10-23 - international - T20 - male - 1273725 - West Indies vs England
2021-10-22 - international - T20 - male - 1273722 - Ireland vs Namibia
2021-10-22 - international - T20 - male - 1273723 - Netherlands vs Sri Lanka
2021-10-21 - international - T20 - male - 1273720 - Bangladesh vs Papua New Guinea
2021-10-21 - international - T20 - male - 1273721 - Oman vs Scotland
2021-10-20 - international - T20 - male - 1273718 - Netherlands vs Namibia
2021-10-20 - international - T20 - male - 1273719 - Sri Lanka vs Ireland
2021-10-19 - international - T20 - male - 1273716 - Scotland vs Papua New Guinea
2021-10-19 - international - T20 - male - 1273717 - Bangladesh vs Oman
2021-10-18 - international - T20 - male - 1273714 - Netherlands vs Ireland
2021-10-18 - international - T20 - male - 1273715 - Namibia vs Sri Lanka
2021-10-17 - international - T20 - male - 1273712 - Papua New Guinea vs Oman
2021-10-17 - international - T20 - male - 1273713 - Scotland vs Bangladesh
2016-04-03 - international - T20 - male - 951373 - England vs West Indies
2016-03-31 - international - T20 - male - 951371 - India vs West Indies
2016-03-30 - international - T20 - male - 951369 - England vs New Zealand
2016-03-28 - international - T20 - male - 951367 - South Africa vs Sri Lanka
2016-03-27 - international - T20 - male - 951363 - India vs Australia
2016-03-27 - international - T20 - male - 951365 - Afghanistan vs West Indies
2016-03-26 - international - T20 - male - 951359 - Bangladesh vs New Zealand
2016-03-26 - international - T20 - male - 951361 - England vs Sri Lanka
2016-03-25 - international - T20 - male - 951355 - Australia vs Pakistan
2016-03-25 - international - T20 - male - 951357 - South Africa vs West Indies
2016-03-23 - international - T20 - male - 951351 - Afghanistan vs England
2016-03-23 - international - T20 - male - 951353 - India vs Bangladesh
2016-03-22 - international - T20 - male - 951349 - New Zealand vs Pakistan
2016-03-21 - international - T20 - male - 951347 - Australia vs Bangladesh
2016-03-20 - international - T20 - male - 951343 - Afghanistan vs South Africa
2016-03-20 - international - T20 - male - 951345 - Sri Lanka vs West Indies
2016-03-19 - international - T20 - male - 951341 - India vs Pakistan
2016-03-18 - international - T20 - male - 951337 - Australia vs New Zealand
2016-03-18 - international - T20 - male - 951339 - England vs South Africa
2016-03-17 - international - T20 - male - 951335 - Afghanistan vs Sri Lanka
2016-03-16 - international - T20 - male - 951331 - England vs West Indies
2016-03-16 - international - T20 - male - 951333 - Bangladesh vs Pakistan
2016-03-15 - international - T20 - male - 951329 - India vs New Zealand
2016-03-13 - international - T20 - male - 951325 - Ireland vs Netherlands
2016-03-13 - international - T20 - male - 951327 - Bangladesh vs Oman
2016-03-12 - international - T20 - male - 951321 - Afghanistan vs Zimbabwe
2016-03-12 - international - T20 - male - 951323 - Hong Kong vs Scotland
2016-03-11 - international - T20 - male - 951319 - Bangladesh vs Ireland
2016-03-10 - international - T20 - male - 951313 - Scotland vs Zimbabwe
2016-03-10 - international - T20 - male - 951315 - Afghanistan vs Hong Kong
2016-03-09 - international - T20 - male - 951309 - Bangladesh vs Netherlands
2016-03-09 - international - T20 - male - 951311 - Ireland vs Oman
2014-04-06 - international - T20 - male - 682965 - India vs Sri Lanka
2014-04-04 - international - T20 - male - 682963 - India vs South Africa
2014-04-03 - international - T20 - male - 682961 - Sri Lanka vs West Indies
2014-04-01 - international - T20 - male - 682957 - Bangladesh vs Australia
2014-04-01 - international - T20 - male - 682959 - Pakistan vs West Indies
2014-03-31 - international - T20 - male - 682953 - England vs Netherlands
2014-03-31 - international - T20 - male - 682955 - New Zealand vs Sri Lanka
2014-03-30 - international - T20 - male - 682949 - Bangladesh vs Pakistan
2014-03-30 - international - T20 - male - 682951 - Australia vs India
2014-03-29 - international - T20 - male - 682945 - Netherlands vs New Zealand
2014-03-29 - international - T20 - male - 682947 - England vs South Africa
2014-03-28 - international - T20 - male - 682941 - Australia vs West Indies
2014-03-28 - international - T20 - male - 682943 - Bangladesh vs India
2014-03-27 - international - T20 - male - 682937 - Netherlands vs South Africa
2014-03-27 - international - T20 - male - 682939 - England vs Sri Lanka
2014-03-25 - international - T20 - male - 682935 - Bangladesh vs West Indies
2014-03-24 - international - T20 - male - 682931 - New Zealand vs South Africa
2014-03-24 - international - T20 - male - 682933 - Netherlands vs Sri Lanka
2014-03-23 - international - T20 - male - 682927 - Australia vs Pakistan
2014-03-23 - international - T20 - male - 682929 - India vs West Indies
2014-03-22 - international - T20 - male - 682923 - South Africa vs Sri Lanka
2014-03-22 - international - T20 - male - 682925 - England vs New Zealand
2014-03-21 - international - T20 - male - 682917 - United Arab Emirates vs Zimbabwe
2014-03-21 - international - T20 - male - 682919 - Ireland vs Netherlands
2014-03-21 - international - T20 - male - 682921 - India vs Pakistan
2014-03-20 - international - T20 - male - 682913 - Afghanistan vs Nepal
2014-03-20 - international - T20 - male - 682915 - Bangladesh vs Hong Kong
2014-03-19 - international - T20 - male - 682909 - Netherlands vs Zimbabwe
2014-03-19 - international - T20 - male - 682911 - Ireland vs United Arab Emirates
2014-03-18 - international - T20 - male - 682905 - Afghanistan vs Hong Kong
2014-03-18 - international - T20 - male - 682907 - Bangladesh vs Nepal
2014-03-17 - international - T20 - male - 682901 - Ireland vs Zimbabwe
2014-03-17 - international - T20 - male - 682903 - Netherlands vs United Arab Emirates
2014-03-16 - international - T20 - male - 682897 - Bangladesh vs Afghanistan
2014-03-16 - international - T20 - male - 682899 - Hong Kong vs Nepal

Consolidated data
-----------------

You may notice that there is an extra CSV file in this archive, called
"all_matches.csv". This file, as the name suggests, contains all of the
ball-by-ball data for matches from the archive in a single CSV. Hopefully
it will make use of the data easier in some cases.

Further information
-------------------

You can find all of our currently available data at https://cricsheet.org/

You can contact me via the following methods:
  Email  : stephen@cricsheet.org
  Twitter: @cricsheet
