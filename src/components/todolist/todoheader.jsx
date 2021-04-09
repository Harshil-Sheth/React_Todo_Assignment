import { AppBar, Grid, Paper, TextField, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

import './todoheader.css'
const Todoheader = () => {
    return (
        <div>
			<AppBar
				color='primary'
				position='static'
				style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>TODO LIST</Typography>
				</Toolbar>
			</AppBar>
			{/* <Grid container justify='center' style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid> */}
            </div>
		
    )
}

export default Todoheader
