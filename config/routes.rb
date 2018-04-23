Rails.application.routes.draw do
  resources :users
  post '/api/user_token' => 'user_token#create'
  post '/api/user' => 'users#create'
  get '/api/trips' => 'trips#index' ## CHECK THIS ROUTE ON REACT 
  # get '/api/trips/search' => 'trips#search' 
  get '/api/comments/:id' => 'comments#index'
  resources :trips, path: "api/trips"
  post '/api/trips/search' => 'trips#getData' # external API interaction
  resources :comments, path: "api/comments"

  # post '/api/user_token' => 'user_token#create'
  # resources :users
  # post '/api/user' => 'users#create'
  # get 'api/trips' => 'trips#index'
  # get '/trips/search' => 'trips#search'
  # get '/api/trips/search' => 'trips#getData'
  # get '/api/comments/:id' => 'comments#index'
  # resources :trips, path: "api/trips"
  # resources :comments, path: "api/comments"
end
