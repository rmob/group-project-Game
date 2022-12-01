<cfoutput>
	<cfif isdefined('url.Action')>
		<cfset Action = "#url.Action#">
	<cfelse>
		No Action given.<cfabort>
	</cfif>

	<cfswitch expression="#Action#">
		<cfcase value="GetLeaderboard">
			<cfquery datasource="Bootcamp" name="Data">
				Select 	Username
						, Score
				From	Data
				Order by Score DESC
				Limit 3
			</cfquery>

			<cfset Leaderboard = "">
			<cfset FirstFlag = 0>

			<cfloop query="Data">
				<cfset NewData = "#Data.UserName#,#Data.Score#">

				<cfif FirstFlag EQ 1>
					<cfset NewData = NewData & ",">
				<cfelse>
					<cfset FirstFlag = 1>
				</cfif>

				<cfset Leaderboard = Leaderboard & NewData>
			</cfloop>

			#trim(Leaderboard)#
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
			<cfif isdefined('url.UserID')>
				<cfset UserID = "#url.UserID#">
			<cfelse>
				<cfset UserID = "">
			</cfif>
			<cfif isdefined('url.Score')>
				<cfset Score = "#url.Score#">
			<cfelse>
				No Score given.<cfabort>
			</cfif>	
			<cfif isdefined('url.Username')>
				<cfset Username = "#url.Username#">
			<cfelse>
				<cfset Username = "">
			</cfif>	

			<cfquery datasource="Bootcamp" name="Data">
				Select 	UserID
						, Score
						, Username
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>

			<cfif Score GT Data.Score>
				<cfquery datasource="Bootcamp">
					Update Data
					Set Score = #Score#
						, Username = "#Username#"
					Where UserID = '#Data.UserID#'
				</cfquery>
			</cfif>

		</cfcase>


		<cfcase value="GetScore">
			<cfif isdefined('url.UserID')>
				<cfset UserID = "#url.UserID#">
			<cfelse>
				No UserID given.<cfabort>
			</cfif>			

			<cfquery datasource="Bootcamp" name="Data">
				Select 	Score
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>
			
			#trim(data.score)#
		</cfcase>

		<cfdefaultcase>
			Active actions are: GetScore, EnterScore, GetLeaderboard, CheckID
		</cfdefaultcase>

	</cfswitch>
</cfoutput>