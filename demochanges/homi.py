import plotly.plotly as py
import plotly.graph_objs as go
import plotly.figure_factory as FF

import numpy as np
import pandas as pd

df = pd.read_csv('Homicide.csv')




import plotly
plotly.tools.set_credentials_file(username='shetusharma13', api_key='epC2B24Y2gk4O2s7nPwK')

trace = go.Scatter(x = df['ObjectId'], y = df['Occurrence_year'],
                  name=' (Number of homicides in year)')
layout = go.Layout(title='Increasing Number of Homicides ',
                   plot_bgcolor='rgb(230, 230,230)',
                   showlegend=True)
fig = go.Figure(data=[trace], layout=layout)

py.iplot(fig, filename='Homicides Over the period of Time')
