<cfoutput>
	<cfif isdefined('url.Action')>
		<cfset Action = "#url.Action#">
	<cfelse>
		No Action given.<cfabort>
	</cfif>

	<cfswitch expression="#Action#">
		<cfcase value="GetLeaderboard">
			<cfquery datasource="Bootcamp" name="Data">
				Select 	UserID
						, Score
				From	Data
				Order by Score DESC
			</cfquery>

			#SerializeJSON(data)#
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
			<cfif isdefined('url.Attributes')>
				<cfset Attribute = "#url.Attributes#">
			<cfelse>
				<cfset Attribute = "">
			</cfif>

			<cfquery datasource="Bootcamp" name="Data">
				Select 	UserID
						, Score
						, Attribute
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>

			<cfif Data.Recordcount EQ 0>
				<cfset NewID = CreateUUID()>

				<cfquery datasource="Bootcamp">
					Insert into Data
					(UserID, Score, Attribute)
					Values
					('#NewID#', #Score#, '#Attribute#')
				</cfquery>

				#NewID#			
			<cfelse>

				<cfquery datasource="Bootcamp">
					Update Data
					Set Score = #Score#
						, Attribute = '#Attribute#'
					Where UserID = '#Data.UserID#'
				</cfquery>

				OK
			</cfif>


		</cfcase>
		<cfcase value="LoadUser">
			<cfif isdefined('url.UserID')>
				<cfset UserID = "#url.UserID#">
			<cfelse>
				No UserID given.<cfabort>
			</cfif>			

			<cfquery datasource="Bootcamp" name="Data">
				Select 	UserID
						, Score
						, Attribute
				From	Data
				Where 	UserID = '#UserID#'
			</cfquery>
			
			#SerializeJSON(data)#
		</cfcase>
		<cfdefaultcase>
			Active actions are: LoadUser, EnterScore, GetLeaderboard
		</cfdefaultcase>

	</cfswitch>
</cfoutput>