import React from 'react';
import Header from '../../components/Header';
import { Container, InputGroup, FormControl, Button, Spinner, Alert } from 'react-bootstrap';
import { ContentContainer, Form } from './styles';

import ShortenerService from '../../services/shortenerService';

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMessage: ''
    }
  }
  
  handleSubmit = async(event) => {
    event.preventDefault();

    const { url } = this.state;

    this.setState({isLoading: true, errorMessage: ''});

    if (!url) {
      this.setState({isLoading: false, errorMessage: 'Informe uma url para encurtar'});
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({isLoading: false, code: result.code});
      } catch (error) {
        this.setState({isLoading: false, errorMessage: 'Ocorreu um erro ao tentar encurtar a URL'});
      }
    }
  }

  copyToClipboard = () => {
    const element = this.inputURL;
    element.select();
    document.execCommand('copy');
  }

  render() {
    const {isLoading, errorMessage, code} = this.state;
    return (
      <Container>
        <Header>Pitu - Seu novo encurtador de URLs</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Digite a url para encurtar" defaultValue="" onChange={e => this.setState({ url: e.target.value})}/>
              <InputGroup.Append>
                <Button variant="primary" type="submit">Encurtar URL</Button>
              </InputGroup.Append>
            </InputGroup>
            {isLoading ? (
              <Spinner animation="border"/>
            ) : (
              code && (
                <>
                  <InputGroup>
                    <FormControl autoFocus={true} defaultValue={`https://pitu.tk/${code}`} ref={(input) => this.inputURL = input}/>
                      <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                      </InputGroup.Append>
                  </InputGroup>
              <p>Para acompanhar as estatísticas, acesse https://pitu.tk/{code}</p>
                </>
              )
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage;