import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const CardExampleContentBlock = () => (
  <Card >
    <Card.Content >
      <Card.Header>
        Shared Files
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='../images/doc.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You uploaded <a>users.doc</a> to your <a>React</a> bot.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='../images/zip.png' />
          <Feed.Content>
            <Feed.Date content='2 days ago' />
            <Feed.Summary>
              You uploaded <a>users.zip</a> to your <a>JS</a> bot.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='../images/xls.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You uploaded <a>users.xlsx</a> to your <a>JAVA</a> bot.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='../images/ppt.png' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You uploaded <a>community.pptx</a> to your <a>Node</a> bot.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)
export default CardExampleContentBlock;
