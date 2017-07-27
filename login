#!/usr/bin/perl -w
use strict;
use warnings;
use VideoLib::CGIHandler;
use VideoLib::User;

my $query = VideoLib::CGIHandler->new;

my $user = VideoLib::User->new(request => $query->request, 'decode-content'=>0);
my $response = $user->generate_login_page;
$query->send_response($response);
