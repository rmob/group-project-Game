<cfoutput>
	<cfif isdefined('url.Action')>
		<cfset Action = "#url.Action#">
	<cfelse>
		No Action given.<cfabort>
	</cfif>

	<cfswitch expression="#Action#">
		<cfcase value="GetLeaderboard">

			<cfobjectcache action = "clear">
			
			<cfquery datasource="Bootcamp" name="Data">
				Select 	Username
						, Score
				From	Data
				Order by Score DESC
				Limit 3
			</cfquery>

			#trim(SerializeJSON(Data, 'struct'))#

		</cfcase>

		<cfcase value="CheckID">
			<cfif isdefined('url.UserID')>
				<cfset UserID = "#url.UserID#">
			<cfelse>
				<cfset UserID = "">
			</cfif>

			<cfquery datasource="Bootcamp" name="Data">
				Select 	UserID
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>

			<cfif Data.Recordcount EQ 0>
				<cfset NewID = CreateUUID()>

				<cfquery datasource="Bootcamp">
					Insert into Data
					(UserID)
					Values
					('#NewID#')
				</cfquery>

				#trim(NewID)#
			<cfelse>
				OK
			</cfif>
		</cfcase>


		<cfcase value="EnterScore">
			<cfset UserID = "#url.UserID#">
			<cfset Score = "#url.Score#">
			<cfset Username = "#url.Username#">

			<cfquery datasource="Bootcamp" name="Data">
				Select 	UserID
						, Score
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>

			<cfif Score GT Data.Score>

				<cfif Username is "">
					<cfset Username = "Annonymous">
				</cfif>

				<cfquery datasource="Bootcamp">
					Update Data
					Set Score = #Score#
						, Username = "#Username#"
					Where UserID = '#Data.UserID#'
				</cfquery>
			</cfif>
			OK
		</cfcase>


		<cfcase value="GetScore">
			<cfset UserID = "#url.UserID#">

			<cfquery datasource="Bootcamp" name="Data">
				Select 	Score
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>
			
			<cfif Data.Recordcount GT 0>
				#trim(data.score)#
			<cfelse>
				0
			</cfif>

		</cfcase>

		<cfdefaultcase>
			Active actions are: GetScore, EnterScore, GetLeaderboard, CheckID
		</cfdefaultcase>

	</cfswitch>
</cfoutput>
