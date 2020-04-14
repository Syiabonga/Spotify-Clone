class Api::V1::SearchController < ApplicationController
    def index #Search for a specific song, album, or artist
        @songs = Song.where('title LIKE?', "%#{params[:query]}%")
        @albuns = Album.where('title LIKE?', "%#{params[:query]}%")
        @artists = Artist.where('name LIKE?', "%#{params[:query]}%")
    end
end
