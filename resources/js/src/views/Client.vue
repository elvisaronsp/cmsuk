<template>
	<vx-card>
		<Clientpoput></Clientpoput>
		<TableMiscellaneous></TableMiscellaneous>
	</vx-card>
</template>

<script>
import TableMiscellaneous from './client/Table'
import Clientpoput from './client/Clientpoput'

export default {
	components:{
		TableMiscellaneous,
		Clientpoput
	}
}
</script>
